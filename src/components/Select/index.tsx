import classnames from "classnames";
import ChevronDownIcon from "@/assets/icons/chevron_down.svg?component";

type SelectMenuProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder: string;
};

// FIXME clean up styling
const SelectMenu = ({
  className,
  placeholder,
  children,
  value,
  ...props
}: SelectMenuProps): JSX.Element => {
  return (
    <select
      className={classnames(
        "rounded-md border border-solid border-gray-[#D1D5DB] shadow-sm box-border bg-white px-[9px] h-[38px] text-sm w-[98%]",
        className
      )}
      value={value || ""}
      {...props}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {children}
    </select>
  );
};

interface LargeSelectMenuProps {
  id: string;
  selected?: boolean;
  label: string;
  subtitle?: string;
}

// TODO Mocked API
const LargeSelectMenu = ({
  id,
  selected,
  label,
  subtitle,
}: LargeSelectMenuProps): JSX.Element => {
  return (
    <div className="px-4 py-5 shadow-sm rounded-md box-border border border-solid border-gray-[##D1D5DB] flex gap-x-4 flex-row items-center">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={selected}
        onChange={(): void => {
          // TODO mocked for now
        }}
      />
      <div className="grow">
        <div className="font-bold text-gray-900 sm:text-sm text-xs">
          {label}
        </div>
        <div className="text-gray-900 sm:text-sm text-xs">{subtitle}</div>
      </div>
      <ChevronDownIcon className="w-5 h-5" />
    </div>
  );
};

export { SelectMenu, LargeSelectMenu };
