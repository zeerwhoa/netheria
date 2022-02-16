import { Header } from "@/components";
import OctomizeCard from "./OctomizeCard";
import OctomizeConfirmationCard from "./OctomizeConfirmationCard";

const OctomizePage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-12 sm:pb-0 pb-6">
      <Header
        title="Shufflenet-v2.onnx"
        subtitle="Created three days ago by Mike Johnson"
      />
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="basis-3/4">
          <OctomizeCard />
        </div>
        <div className="basis-1/4">
          <OctomizeConfirmationCard />
        </div>
      </div>
    </div>
  );
};

export default OctomizePage;
