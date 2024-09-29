import { Chart, Icon, Paper } from "../../../src";
import ConfigurableExample, {
  PropControlBoolean,
  PropControlNumber,
  PropControlString,
} from "./_ConfigurableExample";
import { useState } from "react";

export default function ColumnChartDocs() {
  const [demoProps, setDemoProps] = useState<{
    maxRange?: number;
    rotateXLabels: boolean;
    xAxisTitle: string;
    yAxisTitle: string;
  }>({
    maxRange: undefined,
    rotateXLabels: true,
    xAxisTitle: "Pokémon name",
    yAxisTitle: "Pokémon number",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Chart.ColumnChart</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Chart.ColumnChart
            aria-label="Example column chart"
            data={[
              {
                key: 1,
                label: "Bulbasaur",
                y: 1,
              },
              { key: 7, label: "Squirtle", y: 7 },
              {
                color: "orange",
                key: 25,
                label: (
                  <>
                    <Icon color="orange" draw name="lightning" />
                    Pikachu
                  </>
                ),
                onClick: () => console.log("Pika!"),
                title: "Pika!",
                y: 25,
              },
              { key: 0, label: "MissingNo." },
              {
                color: "pink",
                key: 39,
                label: "Jigglypuff",
                y: 39,
              },
              { key: 120, label: "Staryu", y: 120 },
              {
                key: 133,
                label: "Eevee",
                onClick: () => console.log("Eevee!"),
                y: 133,
              },
            ]}
            maxRange={demoProps.maxRange}
            rotateXLabels={demoProps.rotateXLabels}
            xAxisTitle={demoProps.xAxisTitle}
            yAxisTitle={demoProps.yAxisTitle}
          />
        }
        // disabled because JSX element in `data` creates infinite loop in react-element-to-jsx-string
        showCodeSnippet={false}
      >
        <PropControlNumber
          name="maxRange"
          props={demoProps}
          setProps={setDemoProps}
        />
        <PropControlBoolean
          name="rotateXLabels"
          props={demoProps}
          setProps={setDemoProps}
        />
        <PropControlString
          name="xAxisTitle"
          props={demoProps}
          setProps={setDemoProps}
        />
        <PropControlString
          name="yAxisTitle"
          props={demoProps}
          setProps={setDemoProps}
        />
      </ConfigurableExample>
    </Paper.Group>
  );
}
