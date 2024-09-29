import ConfigurableExample, {
  PropControlBoolean,
  PropControlString,
} from "./_ConfigurableExample";
import { Fab, Icon, Paper } from "../../../src";
import { IProps } from "../../../src/components/Fab";
import { useState } from "react";

export default function FabDocs() {
  const [demoProps, setDemoProps] = useState<IProps>({
    children: "Add widget",
    hide: false,
  });
  const { children, ...rest } = demoProps;

  return (
    <Paper.Group>
      <Paper>
        <h2>Fab</h2>
        <p>
          The{" "}
          <a href="https://material.io/components/buttons-floating-action-button">
            floating action button
          </a>
          .
        </p>
        <p>
          This component does not render if the QuickNav is visible on the
          screen (the two components occupy the same space).
        </p>
      </Paper>
      <ConfigurableExample
        example={
          <Fab aria-label={children as string} {...rest}>
            <Icon name="plus" size="4" />
            {children}
          </Fab>
        }
        rendersInPortal
      >
        <PropControlString
          name="children"
          props={demoProps}
          setProps={setDemoProps}
        />
        <PropControlBoolean
          name="hide"
          props={demoProps}
          setProps={setDemoProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
