import { Engine, Hardware } from ".";

type AccelerateData = {
  engine: Engine;
  hardware: Hardware;
  kernel_trials?: number;
};

export type { AccelerateData };
