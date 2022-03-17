import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
} from "./_ConfigurableExample";
import { Icon, Paper } from "../../../src";
import { ICON_NAMES } from "../../constants";
import { IProps } from "../../../src/components/Icon";

export default function IconDocs() {
  const [props, setProps] = React.useState<IProps>({
    draw: false,
    margin: undefined,
    name: "check",
    size: "4",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Icon</h2>
        <p>
          <span aria-label="Heart" role="img">
            ❤️
          </span>{" "}
          <a href="https://feathericons.com/">Feather</a>
        </p>
        <hr />
        {ICON_NAMES.map((name) => (
          <Icon draw key={name} name={name} size="2" />
        ))}
        <hr />
        <p>
          <Icon draw margin="end" name="help" />
          When you don&apos;t set a size you can use Icon inline
        </p>
        <p>
          You can use the margin prop for horizontal spacing
          <Icon draw margin="start" name="right" />
        </p>
      </Paper>
      <ConfigurableExample example={<Icon {...props} />}>
        <PropControlBoolean name="draw" props={props} setProps={setProps} />
        <PropControlEnum
          name="margin"
          options={[undefined, "start", "end"]}
          props={props}
          setProps={setProps}
        />
        <PropControlEnum
          name="name"
          options={ICON_NAMES}
          props={props}
          setProps={setProps}
        />
        <PropControlEnum
          name="size"
          options={["2", "3", "4", "inherit"]}
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
