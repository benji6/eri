import * as React from "react";
import { Button, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
  PropControlString,
} from "./_ConfigurableExample";
import { IProps } from "../../../src/components/Button";
import { RouteComponentProps } from "@reach/router";

export default function ButtonDocs(_: RouteComponentProps) {
  const [props, setProps] = React.useState<IProps>({
    children: "Click me!",
    danger: false,
    disabled: false,
    variant: "primary",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Button</h2>
        <p>
          Buttons are cute little things you press. Remember to always wrap them
          up in a <code>Button.Group</code>.
        </p>
        <Button.Group>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <a href="/#">Link</a>
        </Button.Group>
        <Button.Group>
          <Button danger>Danger</Button>
          <Button danger variant="secondary">
            Danger secondary
          </Button>
          <Button danger variant="tertiary">
            Danger tertiary
          </Button>
        </Button.Group>
        <Button.Group>
          <Button disabled>Primary disabled</Button>
          <Button disabled variant="secondary">
            Secondary disabled
          </Button>
          <Button disabled variant="tertiary">
            Tertiary disabled
          </Button>
        </Button.Group>
      </Paper>
      <ConfigurableExample
        example={
          <Button.Group>
            <Button {...props} />
          </Button.Group>
        }
      >
        <PropControlString name="children" props={props} setProps={setProps} />
        <PropControlBoolean name="danger" props={props} setProps={setProps} />
        <PropControlBoolean props={props} setProps={setProps} name="disabled" />
        <PropControlEnum
          name="variant"
          options={["primary", "secondary", "tertiary"]}
          props={props}
          setProps={setProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
