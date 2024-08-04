/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Paper, Select, TextField, Toggle } from "../../../src";
import ReactCodeSnippet from "./_ReactCodeSnippet";

interface IProps {
  children?: React.ReactNode;
  example: React.ReactNode;
  rendersInPortal?: boolean;
  showCodeSnippet?: boolean;
}

export default function ConfigurableExample({
  children,
  example,
  rendersInPortal = false,
  showCodeSnippet = true,
}: IProps) {
  return (
    <Paper>
      {children && <h3>Configurable example</h3>}
      {!rendersInPortal && <hr />}
      {example}
      {!rendersInPortal && <hr />}
      {showCodeSnippet && <ReactCodeSnippet>{example}</ReactCodeSnippet>}
      <form noValidate>{children}</form>
    </Paper>
  );
}

export const PropControlBoolean = <
  Name extends string,
  Props extends Record<string, any>,
>({
  name,
  props,
  setProps,
}: {
  name: Name;
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <Toggle
    checked={props[name]}
    label={name}
    onChange={(e) => setProps({ ...props, [name]: e.target.checked })}
  />
);

export const PropControlEnum = <
  Name extends string,
  Props extends Record<string, any>,
>({
  name,
  options,
  props,
  setProps,
}: {
  name: Name;
  options: (string | undefined)[];
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

export const PropControlNumber = <
  Name extends string,
  Props extends Record<string, any>,
>({
  max = Infinity,
  name,
  props,
  setProps,
}: {
  max?: number;
  name: Name;
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <TextField
    label={name}
    onChange={({ target: { valueAsNumber } }) => {
      if (!Number.isNaN(valueAsNumber) && valueAsNumber <= max)
        setProps({ ...props, [name]: valueAsNumber });
    }}
    type="number"
    value={props[name]}
  />
);

export const PropControlString = <
  Name extends string,
  Props extends Record<string, any>,
>({
  name,
  props,
  setProps,
}: {
  name: Name;
  props: Props;
  setProps: React.Dispatch<React.SetStateAction<typeof props>>;
}) => (
  <TextField
    label={name}
    onChange={(e) => setProps({ ...props, [name]: e.target.value })}
    value={props[name]}
  />
);
