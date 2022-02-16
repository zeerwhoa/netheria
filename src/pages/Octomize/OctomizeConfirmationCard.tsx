import { Button, Card } from "@/components";
import useOctomizeStore from "@/store/octomize";

interface RunConfirmationProps {
  instance?: string;
  cpu?: number;
}

const RunConfirmation = ({
  instance,
  cpu,
}: RunConfirmationProps): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-[#2E3238] text-2sm font-bold">{instance}</div>
        <div className="text-gray-400 font-medium text-xs">{`${cpu} cores`}</div>
      </div>
      <div className="text-success-500 text-base font-medium">1</div>
    </div>
  );
};

const OctomizeConfirmationCard = (): JSX.Element => {
  const targets = useOctomizeStore((state) => state.targets);
  const filteredTargets = targets.filter((target) => !!target.instance);

  return (
    <Card>
      <div className="flex flex-col gap-y-6">
        <div className="ml-auto">
          <div className="text-gray-500 text-xs font-bold">Total Runs</div>
          <div className="text-right text-success-500 font-semibold text-[32px]">
            {filteredTargets.length}
          </div>
        </div>
        {filteredTargets.map((target) => (
          <RunConfirmation
            key={target.instance}
            instance={target.instance}
            cpu={target.cpu}
          />
        ))}
        <Button
          className="w-full"
          size="large"
          disabled={!filteredTargets.length}
        >
          Octomize
        </Button>
      </div>
    </Card>
  );
};

export default OctomizeConfirmationCard;
