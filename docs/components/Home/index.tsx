import * as React from "react";
import { Paper, ShareButton } from "../../../src";
import Banner from "./Banner";
import { RouteComponentProps } from "@reach/router";

export default function Home(_: RouteComponentProps) {
  return (
    <Paper.Group>
      <Paper>
        <Banner />
      </Paper>
      <Paper>
        <h2>Principles</h2>
        <ul>
          <li>
            <span aria-label="Yoga" role="img">
              🧘‍♀️
            </span>{" "}
            <strong>Simple</strong> - Eri aims to be minimal and should feel
            clean and intuitive.
          </li>
          <li>
            <span aria-label="Rocket" role="img">
              🚀
            </span>{" "}
            <strong>Lightweight</strong> - Eri is performance focussed and will
            not bloat or slow down your app. Components are lightweight and
            tree-shaking is supported out the box.
          </li>
          <li>
            <span aria-label="Smile" role="img">
              😌
            </span>{" "}
            <strong>Easy</strong> - Eri should be straightforward and easy to
            use.
          </li>
        </ul>
      </Paper>
      <Paper>
        <h2>Getting Started</h2>
        <p>
          The <code>eri</code> package is published on npm so you can install it
          with your favorite package manager. Tree-shaking and TypeScript are
          supported out the box!
        </p>
        <p>
          To get the styles working you will need to include the CSS in your app
          which can be found at <code>eri/dist/index.css</code>.
        </p>
        <p>
          To get the font working you should include the following tags in your
          HTML page:
          <br />
          <code>
            {`<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap" rel="stylesheet">`}
          </code>
        </p>
      </Paper>
      <Paper>
        <h2>About</h2>
        <p>
          Eri is a design system that I created for my personal projects, but it
          is free and open source and the{" "}
          <a href="https://github.com/benji6/eri">
            code is available on GitHub
          </a>
          .
        </p>
        <p>
          Documentation is a little sparse because I&apos;m the only person who
          uses this, but it should be fairly straightforward to use, especially
          if you&apos;re using TypeScript.
        </p>
        <ShareButton />
      </Paper>
      <Paper>
        <h2>See also</h2>
        <p>Here are some things I&apos;ve made using Eri:</p>
        <ul>
          <li>
            <a
              href="https://moodtracker.link"
              rel="noopener"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              MoodTracker
            </a>{" "}
            is a free and open source web app that lets you track your mood.
            It&apos;s simple to use, works offline and because it runs in your
            browser you can use it across all your devices!
          </li>
          <li>
            <a
              href="https://webnotes.link"
              rel="noopener"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            >
              Webnotes
            </a>{" "}
            is a free and open source web app that lets you create and manage
            notes. It&apos;s simple to use, works offline and because it runs in
            your browser you can use it across all your devices!
          </li>
        </ul>
      </Paper>
    </Paper.Group>
  );
}
