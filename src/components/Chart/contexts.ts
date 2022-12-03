import { createContext } from "react";

export const DomainContext = createContext<[number, number]>([0, 1]);
export const RangeContext = createContext<[number, number]>([0, 1]);
export const XAxisTitleContext = createContext<string | undefined>(undefined);
export const YAxisTitleContext = createContext<string | undefined>(undefined);
