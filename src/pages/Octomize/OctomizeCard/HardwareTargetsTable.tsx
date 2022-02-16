import { ReactNode } from "react";
import { Button, SelectMenu } from "@/components";
import classnames from "classnames";
import useOctomizeStore from "@/store/octomize";
import {
  useHardware,
  useHardwareInstances,
  useHardwareProviders,
} from "@/hooks/api";
import { Hardware, Provider } from "@/types/api";
import CloseIcon from "@/assets/icons/close.svg?component";

const TableHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}): JSX.Element => {
  return (
    <td
      className={classnames(
        "text-2xs tracking-widest uppercase h-8",
        className
      )}
    >
      {children}
    </td>
  );
};

const HardwareTargetsTable = (): JSX.Element => {
  const targets = useOctomizeStore((state) => state.targets);
  const usedInstances = targets.map((target) => target.instance);
  const setTargets = useOctomizeStore((state) => state.setTargets);
  const { data: hardware } = useHardware();
  const { data } = useHardwareProviders();
  const { data: instances } = useHardwareInstances();

  const TargetRow = ({
    idx,
    row,
  }: {
    idx: number;
    row: Partial<Hardware>;
  }): JSX.Element => {
    const { provider, instance, cpu, memory } = row;
    return (
      <tr>
        <td>
          <SelectMenu
            placeholder="Select Provider"
            value={provider}
            onChange={(event): void => {
              const newTargets = [...targets];
              newTargets[idx] = {
                provider: event.target.value as Provider,
                instance: undefined,
                cpu: undefined,
                memory: undefined,
              };
              setTargets(newTargets);
            }}
          >
            {data?.map((providerItem: Provider) => (
              <option key={providerItem} value={providerItem}>
                {providerItem}
              </option>
            ))}
          </SelectMenu>
        </td>
        <td>
          <SelectMenu
            placeholder="Select Instance"
            value={instance}
            onChange={(event): void => {
              const newTargets = [...targets];
              newTargets[idx] = newTargets[idx] = {
                ...hardware?.find(
                  (item) => item.instance === event.target.value
                ),
              };
              setTargets(newTargets);
            }}
          >
            {instances[provider || ""]?.map((item: string) => (
              <option
                key={item}
                disabled={usedInstances.includes(item)}
                value={item}
              >
                {item}
              </option>
            ))}
          </SelectMenu>
        </td>
        <td className={classnames(!instance && "opacity-20")}>{cpu || 0}</td>
        <td className={classnames(!instance && "opacity-20")}>{memory || 0}</td>
        <td>
          <CloseIcon
            className="cursor-pointer"
            onClick={(): void => {
              const newTargets = [...targets];
              newTargets.splice(idx, 1);
              console.log(targets, newTargets, idx);
              setTargets(newTargets);
            }}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="flex flex-col gap-4  pt-16">
      <div className="flex flex-row justify-between items-center">
        <div className="font-medium text-base text-gray-500">
          Hardware Targets
        </div>
        <Button
          onClick={(): void => {
            setTargets([
              ...targets,
              {
                provider: undefined,
                instance: undefined,
                cpu: undefined,
                memory: undefined,
              },
            ]);
          }}
        >
          Add
        </Button>
      </div>
      <table className="w-full">
        <thead className="shadow-[inset_0px_-1px_0px_#E0E0E0]">
          <tr>
            <TableHeader className="text-primary-500">Provider</TableHeader>
            <TableHeader className="text-gray-500">Instance</TableHeader>
            <TableHeader className="text-gray-500">VCPU</TableHeader>
            <TableHeader className="text-gray-500">Memory (GIB)</TableHeader>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          {targets.map((row, idx) => (
            <TargetRow
              key={`${row.provider}-${row.instance}-${idx}`}
              idx={idx}
              row={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HardwareTargetsTable;
