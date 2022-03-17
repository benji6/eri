import * as React from "react";
import { Card, Paper } from "../../../src";

export default function CardDocs() {
  return (
    <Paper.Group>
      <Paper>
        <h2>Card</h2>
        <p>
          Wrap your Cards in a <code>Card.Group</code>.
        </p>
        <Card.Group>
          <Card>
            <p>Card one</p>
          </Card>
          <Card>
            <p>Card two</p>
          </Card>
          <Card>
            <p>Card three</p>
          </Card>
          <Card>
            <p>Card four</p>
          </Card>
          <Card>
            <p>Card five</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card six</h3>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card seven</h3>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card eight</h3>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card nine</h3>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card onClick={() => undefined}>
            <h3>Card ten</h3>
            <p>A card can also be a button like this one.</p>
          </Card>
          <Card color="red">
            <h3>Custom color red</h3>
            <p>A card can have a custom color like this one.</p>
          </Card>
          <Card color="blue" onClick={() => undefined}>
            <h3>Custom color blue</h3>
            <p>A card can be a button and have a custom color like this one.</p>
          </Card>
        </Card.Group>
      </Paper>
    </Paper.Group>
  );
}
