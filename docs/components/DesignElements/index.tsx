import BorderRadius from "./BorderRadius";
import BoxShadow from "./BoxShadow";
import Color from "./Color";
import DisplayGroup from "./DisplayGroup";
import Easing from "./Easing";
import FontSize from "./FontSize";
import FontWeight from "./FontWeight";
import { Paper } from "../../../src";

import Space from "./Space";
import Time from "./Time";

export default function DesignElements() {
  return (
    <Paper.Group>
      <Paper>
        <h2>Design elements</h2>
      </Paper>
      <Paper>
        <h3>Font size</h3>
        <p>
          Fonts are sized based on a fluid modular scale which keeps things
          simple and conveys a sense of harmony.
        </p>
        <DisplayGroup>
          <FontSize varName="--font-size-0" />
          <FontSize varName="--font-size-1" />
          <FontSize varName="--font-size-2" />
          <FontSize varName="--font-size-3" />
          <FontSize varName="--font-size-4" />
        </DisplayGroup>
      </Paper>
      <Paper>
        <h3>Font weight</h3>
        <DisplayGroup>
          <FontWeight varName="--font-weight-normal" />
          <FontWeight varName="--font-weight-bold" />
        </DisplayGroup>
      </Paper>
      <Paper>
        <h3>Space</h3>
        <p>
          Space is based on a fluid modular scale and is defined with{" "}
          <code>em</code> units to keep it responsive to font size.
        </p>
        <DisplayGroup>
          <Space varName="--space-0" />
          <Space varName="--space-1" />
          <Space varName="--space-2" />
          <Space varName="--space-3" />
          <Space varName="--space-4" />
        </DisplayGroup>
        <h3>Border radius</h3>
        <p>Border radius is responsive to font size.</p>
        <DisplayGroup>
          <BorderRadius varName="--border-radius-0" />
          <BorderRadius varName="--border-radius-1" />
        </DisplayGroup>
        <h3>Border width</h3>
        <p>Border width is fixed for all devices.</p>
        <DisplayGroup>
          <Space varName="--border-width-0" />
          <Space varName="--border-width-1" />
          <Space varName="--border-width-2" />
        </DisplayGroup>
      </Paper>
      <Paper>
        <h3>Box shadow</h3>
        <DisplayGroup>
          <BoxShadow varName="--box-shadow-0" />
          <BoxShadow varName="--box-shadow-1" />
          <BoxShadow varName="--box-shadow-2" />
        </DisplayGroup>
      </Paper>
      <Paper>
        <h3>Time</h3>
        <p>
          Time is responsive, things take more time on larger screens so
          velocity feels more constant.
        </p>
        <DisplayGroup>
          <Time varName="--time-0" />
          <Time varName="--time-1" />
          <Time varName="--time-2" />
          <Time varName="--time-3" />
        </DisplayGroup>
        <h3>Easing</h3>
        <p>
          Inspiration taken from{" "}
          <a href="https://material.io/design/motion/speed.html#easing">
            Material Design
          </a>
          .
        </p>
        <DisplayGroup>
          <Easing varName="--easing-accelerate" />
          <Easing varName="--easing-decelerate" />
          <Easing varName="--easing-standard" />
        </DisplayGroup>
      </Paper>
      <Paper>
        <h3>Color</h3>
        <p>
          Eri uses the{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
            rel="noopener noreferrer"
            target="_blank"
          >
            <code>prefers-color-scheme</code>
          </a>{" "}
          media feature to display a dark theme to users who prefer it.
        </p>
        <h4>Figure</h4>
        <DisplayGroup>
          <Color varName="--color-figure-more" />
          <Color varName="--color-figure" />
          <Color varName="--color-figure-less" />
        </DisplayGroup>
        <h4>Balance</h4>
        <DisplayGroup>
          <Color varName="--color-balance-more" />
          <Color varName="--color-balance" />
          <Color varName="--color-balance-less" />
        </DisplayGroup>
        <h4>Ground</h4>
        <DisplayGroup>
          <Color varName="--color-ground-more" />
          <Color varName="--color-ground" />
          <Color varName="--color-ground-less" />
        </DisplayGroup>
        <h4>Mask</h4>
        <DisplayGroup>
          <Color varName="--color-mask" />
        </DisplayGroup>
        <h4>Theme</h4>
        <p>
          Use <code>--color-theme-app</code> for web app manifest or{" "}
          <code>theme_color</code> meta tag
        </p>
        <DisplayGroup>
          <Color varName="--color-theme-app" />
          <Color varName="--color-theme-more" />
          <Color varName="--color-theme" />
          <Color varName="--color-theme-less" />
          <Color varName="--color-theme-least" />
        </DisplayGroup>
        <h4>Negative</h4>
        <DisplayGroup>
          <Color varName="--color-negative-more" />
          <Color varName="--color-negative" />
          <Color varName="--color-negative-less" />
        </DisplayGroup>
        <h4>Positive</h4>
        <DisplayGroup>
          <Color varName="--color-positive" />
          <Color varName="--color-positive-less" />
        </DisplayGroup>
        <h4>Highlight</h4>
        <DisplayGroup>
          <Color varName="--color-highlight-0" />
          <Color varName="--color-highlight-1" />
          <Color varName="--color-highlight-2" />
          <Color varName="--color-highlight-3" />
          <Color varName="--color-highlight-4" />
          <Color varName="--color-highlight-5" />
        </DisplayGroup>
      </Paper>
    </Paper.Group>
  );
}
