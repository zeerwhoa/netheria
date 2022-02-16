interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-1 text-gray-600">
      <h2 className="text-4xl font-light">{title}</h2>
      <div className="font-medium text-sm">{subtitle}</div>
    </div>
  );
};

export { Header };
