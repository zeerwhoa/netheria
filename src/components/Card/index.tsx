import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className="shadow-e5 rounded-lg p-6">{children}</div>;
};

export { Card };
