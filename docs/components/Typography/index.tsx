import { Paper, SubHeading } from "../../../src";
import { LOREM_IPSUM } from "../../constants";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const treeSrc = require("./tree.jpg");

export default function Typography() {
  return (
    <Paper.Group>
      <Paper>
        <h2>Typography</h2>
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
        <h1>
          Heading 1 <SubHeading>With a subheading</SubHeading>
        </h1>
        <h2>
          Heading 2 <SubHeading>With a subheading</SubHeading>
        </h2>
        <p>{LOREM_IPSUM}</p>
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
        <p>{LOREM_IPSUM}</p>
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
        <h3>Img</h3>
        <img alt="Tree" src={treeSrc} />
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
        <h3>Table</h3>
        <table>
          <thead>
            <tr>
              <th>Column A</th>
              <th>Column B</th>
              <th>Column C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Foo</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Bar</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Baz</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </Paper.Group>
  );
}
