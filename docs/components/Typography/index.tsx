import * as React from "react";
import { Paper, SubHeading } from "../../../src";
import { RouteComponentProps } from "@reach/router";

export default function Typography(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <h2>Typography</h2>
      </Paper>
      <Paper>
        <h1>
          Heading 1 <SubHeading>With a subheading</SubHeading>
        </h1>
        <h2>
          Heading 2 <SubHeading>With a subheading</SubHeading>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Example of some <strong>strong text</strong>.
        </p>
        <p>
          Example of some <small>small text</small>.
        </p>
      </Paper>
      <Paper>
        <h2>Heading 2</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Heading 4</h4>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </Paper>
      <Paper>
        <h3>Hr</h3>
        <hr />
      </Paper>
      <Paper>
        <h3>List</h3>
        <h4>Ordered list</h4>
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
          <li>Ordered list item 4</li>
        </ol>
        <h4>Unordered list</h4>
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
          <li>Unordered list item 4</li>
        </ul>
      </Paper>
      <Paper>
        <h3>Blockquote</h3>
        <p>
          A <code>{"<blockquote>"}</code> looks like this:
        </p>
        <blockquote cite="https://www.goodreads.com/book/show/640565.The_Book_of_Chuang_Tzu">
          <p>
            All men know the use of the useful, but nobody knows the use of the
            useless!
          </p>
          <footer>
            —Chuang Tzu, <cite>The Book of Chuang Tzu</cite>
          </footer>
        </blockquote>
        <p>And then here is a normal paragraph.</p>
      </Paper>
      <Paper>
        <h3>CSS utilities</h3>
        <p className="center">
          You can center any element by setting the <code>class</code> to
          &quot;center&quot;
        </p>
        <p className="center negative">
          You can give any element a negative sentiment by setting the{" "}
          <code>class</code> to &quot;negative&quot;
        </p>
        <p className="pre-line">
          {`You can set white-space to pre-line...

...by setting the class to "pre-line"`}
        </p>
      </Paper>
    </Paper.Group>
  );
}
