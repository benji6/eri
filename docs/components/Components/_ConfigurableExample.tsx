/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Paper, Select, TextField, Toggle } from "../../../src";
import ReactCodeSnippet from "./_ReactCodeSnippet";

interface IProps {
  children?: React.ReactNode;
  example: React.ReactNode;
  rendersInPortal?: boolean;
}

export default function ConfigurableExample({
  children,
  example,
  rendersInPortal = false,
}: IProps) {
  return (
    <Paper>
      {children && <h3>Configurable example</h3>}
      {!rendersInPortal && <hr />}
      {example}
      {!rendersInPortal && <hr />}
      <ReactCodeSnippet>{example}</ReactCodeSnippet>
      <form noValidate>{children}</form>
    </Paper>
  );
}

export const PropControlBoolean = <Props extends { [k: string]: any }>({
  name,
  props,
  setProps,
}: {
  name: keyof Props;
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <Toggle
    checked={props[name]}
    label={name}
    onChange={(e) => setProps({ ...props, [name]: e.target.checked })}
  />
);

export const PropControlEnum = <Props extends { [k: string]: any }>({
  name,
  options,
  props,
  setProps,
}: {
  name: keyof Props;
  options: string[];
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <Select
    label={name}
    onChange={(e) =>
      setProps({
        ...props,
        [name]: e.target.value ? e.target.value : undefined,
      })
    }
    value={props[name]}
  >
    {options.map((option, i) => (
      <option key={i} value={option}>
        {option}
      </option>
    ))}
  </Select>
);

export const PropControlNumber = <Props extends { [k: string]: any }>({
  max = Infinity,
  name,
  props,
  setProps,
}: {
  max?: number;
  name: keyof Props;
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <TextField
    label={name}
    onChange={({ target: { value } }) => {
      const n = Number(value);
      if (!Number.isNaN(n) && n <= max) setProps({ ...props, [name]: n });
    }}
    value={props[name]}
  />
);

export const PropControlString = <Props extends { [k: string]: any }>({
  name,
  props,
  setProps,
}: {
  name: keyof Props;
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <TextField
    label={name}
    onChange={(e) => setProps({ ...props, [name]: e.target.value })}
    value={props[name]}
  />
);
