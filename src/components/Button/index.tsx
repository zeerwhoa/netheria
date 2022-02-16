import classnames from "classnames";

const variants = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white",
};

const sizes = {
  default: "py-2 px-4 text-sm rounded",
  large: "text-md py-4 px-6 rounded-md",
};

type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "size"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

const Button = ({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const { disabled } = props;
  return (
    <button
      className={classnames(
        "font-medium shadow-sm",
        !disabled && variants[variant],
        disabled && "bg-gray-200 text-gray-300",
        sizes[size],
        className
      )}
      {...props}
      type="button"
    >
      {props.children}
    </button>
  );
};

export { Button };
