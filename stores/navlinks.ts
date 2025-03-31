import { IUseNavlinks } from "@/types/store";
import { create } from "zustand";

const useNavlinks = create<IUseNavlinks>((set, get) => ({
      activeNavlink: "home",
      setActiveNavlink: (activeNavlink) => set({activeNavlink})
}))

export default useNavlinks;