import OctoMLLogo from "@/assets/logos/octo_ml.svg?component";

const Sidebar = (): JSX.Element => {
  return (
    <div className="w-[64px] bg-white h-screen shadow-sidebar flex flex-col items-center p-4">
      <OctoMLLogo className="w-6 h-6" />
    </div>
  );
};

export default Sidebar;
