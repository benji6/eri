import * as React from "react";
import ConfigurableExample, { PropControlEnum } from "./_ConfigurableExample";
import { IProps, iconNameMap } from "../../../src/components/Icon";
import { Icon, Paper } from "../../../src";
import { RouteComponentProps } from "@reach/router";

const iconNames = Object.keys(iconNameMap);

export default function IconDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
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
        <Icon name="copy" />
        <Icon name="check" />
        <Icon name="cross" />
        <Icon name="down" />
        <Icon name="left" />
        <Icon name="menu" />
        <Icon name="moon" />
        <Icon name="plus" />
        <Icon name="right" />
        <Icon name="save" />
        <Icon name="share" />
        <Icon name="sun" />
      </Paper>
      <ConfigurableExample example={<Icon {...props} />}>
        <PropControlEnum
          name="name"
          options={iconNames}
          props={props}
          setProps={setProps}
        />
        <PropControlEnum
          name="size"
          options={["2", "3", "4"]}
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
