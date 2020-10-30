import * as React from "react";

export const DomainContext = React.createContext<[number, number]>([0, 1]);
export const RangeContext = React.createContext<[number, number]>([0, 1]);
export const XAxisTitleContext = React.createContext<string | undefined>(
  undefined
);
export const YAxisTitleContext = React.createContext<string | undefined>(
  undefined
);
