import * as React from "react";
import { Icon, Paper, QuickNav, RadioButton } from "../../../src";
import { ICON_NAMES } from "../../constants";
import { Link } from "react-router-dom";

const MAX_LINKS = 4;

export default function QuickNavDocs() {
  const [linkCount, setLinkCount] = React.useState(MAX_LINKS);

  return (
    <Paper.Group>
      <Paper>
        <h2>QuickNav</h2>
        <p>
          The QuickNav isn&apos;t rendered when the screen is wide enough for
          the Nav to always be open. You may need to narrow your browser window
          to see it.
        </p>
        <p>
          The first button demonstrates the active style when the user is
          already on the linked page.
        </p>
        <h3>See also</h3>
        <ul>
          <li>
            <Link to="../nav">Nav</Link>
          </li>
        </ul>
        <RadioButton.Group
          label="Number of buttons"
          onChange={(e) =>
            setLinkCount(Number((e.target as HTMLInputElement).value))
          }
        >
          {Array.from({ length: MAX_LINKS }, (_, i) => {
            const n = i + 1;
            return (
              <RadioButton
                defaultChecked={linkCount === n}
                key={n}
                name="button-count"
                value={n}
              >
                {n}
              </RadioButton>
            );
          })}
        </RadioButton.Group>
        <QuickNav>
          {ICON_NAMES.slice(0, linkCount).map((name, i) => (
            <QuickNav.Link key={name} to={i ? "/" : location.pathname}>
              <Icon name={name} size="3" />
            </QuickNav.Link>
          ))}
        </QuickNav>
      </Paper>
    </Paper.Group>
  );
}
