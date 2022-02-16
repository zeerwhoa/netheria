import { Provider } from "./shared";

type Hardware = {
  provider: Provider;
  instance: string;
  cpu: number;
  memory: number;
};

export type { Hardware };
