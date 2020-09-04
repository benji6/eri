import * as React from "react";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
} from "./_ConfigurableExample";
import { Icon, Paper } from "../../../src";
import { ICON_NAMES } from "../../constants";
import { IProps } from "../../../src/components/Icon";
import { RouteComponentProps } from "@reach/router";

export default function IconDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    draw: false,
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
        <Icon draw name="copy" />
        <Icon draw name="check" />
        <Icon draw name="cross" />
        <Icon draw name="down" />
        <Icon draw name="left" />
        <Icon draw name="menu" />
        <Icon draw name="moon" />
        <Icon draw name="plus" />
        <Icon draw name="right" />
        <Icon draw name="save" />
        <Icon draw name="share" />
        <Icon draw name="sun" />
      </Paper>
      <ConfigurableExample example={<Icon {...props} />}>
        <PropControlBoolean name="draw" props={props} setProps={setProps} />
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
