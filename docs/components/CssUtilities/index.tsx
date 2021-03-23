import * as React from "react";
import { Paper } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function CssUtilities(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>CSS utilities</h2>
        <h3>Border radius</h3>
        <ul>
          <li>
            <code>br-0</code>: Sets border radius to slightly rounded
          </li>
          <li>
            <code>br-1</code>: Sets border radius to rounded
          </li>
          <li>
            <code>br-max</code>: Sets border radius to maximum roundedness
          </li>
        </ul>
        <h3>Border width</h3>
        <ul>
          <li>
            <code>bw-0</code>: Sets border width to thin
          </li>
          <li>
            <code>bw-1</code>: Sets border width to medium
          </li>
          <li>
            <code>bw-2</code>: Sets border width to thick
          </li>
        </ul>
        <h3>Box shadow</h3>
        <ul>
          <li>
            <code>bs-0</code>: Sets a subtle box shadow
          </li>
          <li>
            <code>bs-1</code>: Sets a box shadow
          </li>
        </ul>
        <h3>Display</h3>
        <ul>
          <li>
            <code>block</code>: Sets display to block
          </li>
          <li>
            <code>flex</code>: Sets display to flex
          </li>
          <li>
            <code>grid</code>: Sets display to grid
          </li>
          <li>
            <code>inline-flex</code>: Sets display to inline-flex
          </li>
        </ul>
        <h3>Flex direction</h3>
        <ul>
          <li>
            <code>flex-col</code>: Sets display to flex and flex direction to
            column
          </li>
        </ul>
        <h3>Font size</h3>
        <ul>
          <li>
            <code>fs-0</code>: Sets font size to tiny
          </li>
        </ul>
        <h3>Font style</h3>
        <ul>
          <li>
            <code>italic</code>: Sets font style to italic
          </li>
        </ul>
        <h3>Font weight</h3>
        <ul>
          <li>
            <code>fw-b</code>: Sets font weight to bold
          </li>
          <li>
            <code>fw-n</code>: Sets font weight to normal
          </li>
        </ul>
        <h3>Position</h3>
        <ul>
          <li>
            <code>absolute</code>: Sets position to absolute
          </li>
          <li>
            <code>fixed</code>: Sets position to fixed
          </li>
          <li>
            <code>relative</code>: Sets position to relative
          </li>
        </ul>
        <h3>Sentiment</h3>
        <p className="negative">
          You can give any element a negative sentiment by setting the class to{" "}
          <code>negative</code>
        </p>
        <p className="positive">
          You can give any element a positive sentiment by setting the class to{" "}
          <code>positive</code>
        </p>
        <h3>Spacing</h3>
        <ul>
          <li>
            <code>m-0</code>: Removes all margin
          </li>
          <li>
            <code>mb-1</code>: Gives things a tiny bottom margin
          </li>
          <li>
            <code>ml-1</code>: Gives things a tiny left margin
          </li>
          <li>
            <code>mr-1</code>: Gives things a tiny right margin
          </li>
          <li>
            <code>my-3</code>: Gives things a medium vertical margin
          </li>
          <li>
            <code>p-0</code>: Removes all padding
          </li>
          <li>
            <code>p-1</code>: Gives things a tiny amount of padding
          </li>
          <li>
            <code>p-2</code>: Gives things a small amount of padding
          </li>
          <li>
            <code>p-3</code>: Gives things a medium amount of padding
          </li>
          <li>
            <code>p-4</code>: Gives things a big amount of padding
          </li>
          <li>
            <code>pt-0</code>: Removes top padding
          </li>
          <li>
            <code>pt-1</code>: Gives things a tiny amount of top padding
          </li>
          <li>
            <code>px-1</code>: Gives things a tiny amount of horizontal padding
          </li>
          <li>
            <code>px-4</code>: Gives things a big amount of horizontal padding
          </li>
          <li>
            <code>py-2</code>: Gives things a small amount of vertical padding
          </li>
        </ul>
        <h3>Text align</h3>
        <p className="center">
          You can center any element by setting the class to <code>center</code>
        </p>
        <h3>User select</h3>
        <ul>
          <li>
            <code>select-none</code>: Disables user select
          </li>
        </ul>
        <h3>Whitespace</h3>
        <p className="pre-line">
          {`You can set white-space to pre-line...

...by setting the class to `}
          <code>pre-line</code>
        </p>
        <p className="nowrap">
          You can set <code>whitespace</code> to <code>nowrap</code> on any
          element by setting the class to <code>nowrap</code>
        </p>
        <h3>Z-index</h3>
        <ul>
          <li>
            <code>z-1</code>: sets z-index to 1
          </li>
          <li>
            <code>z-2</code>: sets z-index to 2
          </li>
          <li>
            <code>z-3</code>: sets z-index to 3
          </li>
        </ul>
      </Paper>
    </Paper.Group>
  );
}
