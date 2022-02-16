import { Engine, Hardware } from ".";

type BenchmarkData = {
  engine: Engine;
  hardware: Hardware;
  num_trials: number;
  runs_per_trial: 1;
};

export type { BenchmarkData };
