import { Hardware } from "@/types/api";
import create from "zustand";

interface OctomizeState {
  targets: Partial<Hardware>[];
  setTargets: (targets: Partial<Hardware>[]) => void;
}

const useOctomizeStore = create<OctomizeState>((set) => ({
  targets: [],
  setTargets: (targets: Partial<Hardware>[]): void =>
    set((state) => ({
      ...state,
      targets,
    })),
}));

export default useOctomizeStore;
