import { createContext } from "react";

export const DomainContext = createContext<[number, number]>([0, 1]);
export const RangeContext = createContext<[number, number]>([0, 1]);
