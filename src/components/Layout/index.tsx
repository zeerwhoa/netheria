import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

// Renders the structural layout for the app, including the header and content.
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-row bg-gray-50 h-screen">
      <Sidebar />
      <div className="mt-[80px] flex w-full justify-center">
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
};

export { Layout };
