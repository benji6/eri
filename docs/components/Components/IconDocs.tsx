import ConfigurableExample, {
  PropControlBoolean,
  PropControlEnum,
} from "./_ConfigurableExample";
import { Icon, Paper } from "../../../src";
import { ICON_NAMES } from "../../constants";
import { IProps } from "../../../src/components/Icon";
import { useState } from "react";

export default function IconDocs() {
  const [props, setProps] = useState<IProps>({
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
        <div
          style={{
            display: "grid",
            gap: "var(--space-0)",
            gridTemplateColumns: "repeat(auto-fit, minmax(8em, 1fr))",
          }}
        >
          {ICON_NAMES.map((name) => (
            <div key={name}>
              <Icon draw key={name} margin="end" name={name} />
              {name}
            </div>
          ))}
        </div>
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
