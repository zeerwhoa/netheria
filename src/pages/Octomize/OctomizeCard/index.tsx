import { Card, LargeSelectMenu } from "@/components";
import HardwareTargetsTable from "./HardwareTargetsTable";

const OctomizeCard = (): JSX.Element => {
  return (
    <Card>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-gray-500 text-3xl font-light pb-[14px]">
          Octomize
        </h3>
        <LargeSelectMenu
          id="benchmark"
          label="Benchmark"
          subtitle="This is some sub content to explain benchmarking."
        />
        <LargeSelectMenu
          id="accelerate"
          label="Accelerate"
          subtitle="Could even open this accordian for a paragraph of text."
          selected
        />
        <HardwareTargetsTable />
      </div>
    </Card>
  );
};

export default OctomizeCard;
