import { createContext } from "react";


export type ContextHeaderCountType = {
    contextHeaderCount: number,
    setContextHeaderCount: (contextCount: number) => void
};

export const ContextHeaderCount = createContext<ContextHeaderCountType>({
    contextHeaderCount: 0,
    setContextHeaderCount: () => {}
});