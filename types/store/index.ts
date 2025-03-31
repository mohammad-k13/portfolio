import { type INavLink, type Pages } from "..";

export interface IUseNavlinks {
      activeNavlink: Pages,
      setActiveNavlink: (data: Pages) => void;
}