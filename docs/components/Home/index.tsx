import * as React from "react";
import { Paper, ShareButton } from "../../../src";
import Banner from "./Banner";
import CodeSnippet from "../Components/_CodeSnippet";

export default function Home() {
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
              🧘
            </span>{" "}
            <strong>Simple</strong> - Eri is minimal and provides a clean and
            intuitive user experience. Eri does confuse or distract users with
            excessive design flair.
          </li>
          <li>
            <span aria-label="Exclamation mark" role="img">
              ❗
            </span>{" "}
            <strong>Prescriptive</strong> - Eri enforces a strict way of
            building applications and leaves little room for variation and
            creative freedom. Eri does not permit the creation of wildly
            differing user experiences.
          </li>
          <li>
            <span aria-label="Rocket" role="img">
              🚀
            </span>{" "}
            <strong>Performant</strong> - Eri is performance focussed and will
            not bloat or slow down your app. Components are lightweight and
            tree-shaking is supported out the box.
          </li>
        </ul>
      </Paper>
      <Paper>
        <h2>Getting started</h2>
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
          To preload the font and reduce CLS you should include the following
          tag in the <code>head</code> of your HTML page:
        </p>
        <CodeSnippet language="html">{`<link as="font" crossorigin href="eri/dist/Mona-Sans.woff2" rel="preload" type="font/woff2"/>`}</CodeSnippet>
        <p>
          You&apos;re now good to go! Eri comes bundled with some global styles.
          Be sure to use semantic markup and things should generally work as
          expected.
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
