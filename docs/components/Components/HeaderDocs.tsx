import ConfigurableExample, { PropControlString } from "./_ConfigurableExample";
import { Header, Nav, Paper } from "../../../src";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HeaderDocs() {
  const [props, setProps] = useState({
    title: "Eri",
  });

  return (
    <Paper.Group>
      <Paper>
        <h2>Header</h2>
      </Paper>
      <ConfigurableExample
        example={
          <Header>
            <h1>
              <Link to="#">{props.title}</Link>
            </h1>
            <Nav.Button />
          </Header>
        }
      >
        <PropControlString name="title" props={props} setProps={setProps} />
      </ConfigurableExample>
    </Paper.Group>
  );
}
