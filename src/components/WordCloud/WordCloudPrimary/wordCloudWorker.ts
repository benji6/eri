// Inspired by https://github.com/jasondavies/d3-cloud
// Heavily modified for Eri usecase

import { SVG_ASPECT_RATIO, SVG_HEIGHT, SVG_WIDTH } from "../constants";

type Bounds = [{ x: number; y: number }, { x: number; y: number }];

interface Word {
  hasText: boolean;
  height: number;
  rotate: number;
  size: number;
  sprite?: number[];
  text: string;
  weighting: number;
  width: number;
  x: number;
  x0: number;
  x1: number;
  xoff?: number;
  y: number;
  y0: number;
  y1: number;
  yoff?: number;
}

const fontFace = new FontFace(
  "Mona sans",
  `url(${new URL(
    "../../../Mona-Sans.woff2",
    import.meta.url,
  )}) format("woff2-variations")`,
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
((self as any).fonts as FontFaceSet).add(fontFace);
const loadFontFacePromise = fontFace.load();

const SVG_DIAGONAL = Math.hypot(SVG_WIDTH, SVG_HEIGHT);
const CANVAS_HEIGHT = 2048;
const CANVAS_WIDTH = 2048;
const WORD_PADDING = 2;

// Set via trial and error. Derived by balancing the desire to place
// as many words as possible and the desire to have as little empty
// space as possible. Note that behavior is different bewteen
// different browsers
const FONT_SIZE_RATIO_ADJUSTMENT = 0.79;
// Set via trial and error. Attempting to balance desire to fit all
// words when there are few of them with the desire to have rotation
const MINIMUM_WORD_COUNT_FOR_ROTATION = 16;

const archimedeanSpiral = (theta: number): [x: number, y: number] => {
  const r = 0.1 * theta;
  return [r * Math.cos(theta) * SVG_ASPECT_RATIO, r * Math.sin(theta)];
};

onmessage = async (e) => {
  const board: number[] = Array(SVG_WIDTH * SVG_HEIGHT).fill(0);
  const words: Word[] = [];
  let bounds: Bounds | null = null;

  await loadFontFacePromise;
  const canvas = new OffscreenCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  const context = canvas.getContext("2d", {
    willReadFrequently: true,
  });
  if (!context) throw Error("failed to get context");
  context.fillStyle = context.strokeStyle = "red";
  context.textAlign = "center";

  const sortedMeasuredWords = Object.entries(e.data as Record<string, number>)
    .sort((a, b) => {
      const weightingDifference = b[1] - a[1];
      if (weightingDifference) return weightingDifference;
      return b[0].length - a[0].length;
    })
    .map(([text, weighting]) => {
      const size = weighting;
      context.font = `${size}px Mona Sans`;
      return {
        height: size,
        size,
        text,
        weighting,
        width: context.measureText(text + "m").width,
      };
    });

  let totalWordArea = 0;
  for (const { height, width } of sortedMeasuredWords)
    totalWordArea += height * width;
  const fontSizeRatio =
    Math.sqrt((SVG_HEIGHT * SVG_WIDTH) / totalWordArea) *
    (1 - Math.sqrt(1 / sortedMeasuredWords.length)) *
    FONT_SIZE_RATIO_ADJUSTMENT;

  const wordsToPlace: Word[] = sortedMeasuredWords.map((d) => {
    const size = d.size * fontSizeRatio;
    context.font = `${size}px Mona Sans`;

    let height = size << 1;
    let width = context.measureText(d.text + "m").width;

    const rotate =
      sortedMeasuredWords.length < MINIMUM_WORD_COUNT_FOR_ROTATION
        ? 0
        : (Math.round(Math.random()) * -Math.PI) / 2;
    if (rotate) {
      const sr = Math.sin(rotate);
      const cr = Math.cos(rotate);
      height = ~~(Math.abs(width * sr) + Math.abs(height * cr));
      width = ~~(Math.abs(width * cr) + Math.abs(height * sr));
    } else width = ~~width;

    const x1 = width >> 1;
    const y1 = height >> 1;

    return {
      ...d,
      hasText: false,
      height,
      rotate,
      size,
      width,
      x: (SVG_WIDTH * (Math.random() + 0.5)) >> 1,
      x0: -x1,
      x1,
      y: (SVG_HEIGHT * (Math.random() + 0.5)) >> 1,
      y0: -y1,
      y1,
    };
  });

  for (let i = 0; i < wordsToPlace.length; i++) {
    const d = wordsToPlace[i];

    let di = i;
    let d2 = d;
    if (!d.sprite) {
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      let x = 0;
      let y = 0;
      let maxh = 0;
      --di;
      while (++di < wordsToPlace.length) {
        d2 = wordsToPlace[di];
        context.save();
        context.font = `${d2.size}px Mona sans`;
        if (d2.height > maxh) maxh = d2.height;
        if (x + d2.width >= CANVAS_WIDTH) {
          x = 0;
          y += maxh;
          maxh = 0;
        }
        if (y + d2.height >= CANVAS_HEIGHT) break;
        context.translate(x + (d2.width >> 1), y + (d2.height >> 1));
        if (d2.rotate) context.rotate(d2.rotate);
        context.fillText(d2.text, 0, 0);
        context.lineWidth = 2 * WORD_PADDING;
        context.strokeText(d2.text, 0, 0);
        context.restore();
        d2.xoff = x;
        d2.yoff = y;
        d2.hasText = true;
        x += d2.width;
      }
      const pixels = context.getImageData(
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
      ).data;
      const sprite: number[] = [];
      while (--di >= 0) {
        d2 = wordsToPlace[di];
        if (!d2.hasText) continue;
        let h = d2.y1 - d2.y0;
        sprite.fill(0, 0, h * d2.width);
        if (d2.xoff === undefined || d2.yoff === undefined) break;
        x = d2.xoff;
        y = d2.yoff;
        let seen = 0;
        let seenRow = -1;
        for (let j = 0; j < h; j++) {
          for (let i = 0; i < d2.width; i++) {
            const k = d2.width * j + (i >> 5);
            const m = pixels[((y + j) * CANVAS_WIDTH + (x + i)) << 2]
              ? 1 << (31 - (i % 32))
              : 0;
            sprite[k] |= m;
            seen |= m;
          }
          if (seen) seenRow = j;
          else {
            d2.y0++;
            h--;
            j--;
            y++;
          }
        }
        d2.y1 = d2.y0 + seenRow;
        d2.sprite = sprite.slice(0, (d2.y1 - d2.y0) * d2.width);
      }
    }

    if (!d.hasText) continue;
    const startX = d.x;
    const startY = d.y;
    const dt = Math.random() < 0.5 ? 1 : -1;
    let t = -dt;
    let dx;
    let dy;

    while (([dx, dy] = archimedeanSpiral((t += dt)))) {
      if (Math.hypot(~~dx, ~~dy) >= SVG_DIAGONAL) break;

      d.x = startX + ~~dx;
      d.y = startY + ~~dy;

      if (
        d.x + d.x0 < 0 ||
        d.y + d.y0 < 0 ||
        d.x + d.x1 > SVG_WIDTH ||
        d.y + d.y1 > SVG_HEIGHT
      )
        continue;

      const w = d.width;
      const lx = d.x - (w >> 1);
      const sx = lx & 127;
      const msx = 32 - sx;
      const h = d.y1 - d.y0;

      const cloudCollide = () => {
        let x = (d.y + d.y0) * SVG_WIDTH + (lx >> 5);
        let last;
        for (let j = 0; j < h; j++) {
          last = 0;
          for (let i = 0; i <= w; i++) {
            if (
              ((last << msx) |
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                (i < w ? (last = d.sprite![j * w + i]) >>> sx : 0)) &
              board[x + i]
            )
              return true;
          }
          x += SVG_WIDTH;
        }
        return false;
      };

      if (
        !bounds ||
        (d.x + d.x1 > bounds[0].x &&
          d.x + d.x0 < bounds[1].x &&
          d.y + d.y1 > bounds[0].y &&
          d.y + d.y0 < bounds[1].y &&
          !cloudCollide())
      ) {
        let x = (d.y + d.y0) * SVG_WIDTH + (lx >> 5);
        let last;
        for (let j = 0; j < h; j++) {
          last = 0;
          for (let i = 0; i <= w; i++) {
            board[x + i] |=
              (last << msx) |
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              (i < w ? (last = d.sprite![j * w + i]) >>> sx : 0);
          }
          x += SVG_WIDTH;
        }
        delete d.sprite;
        words.push(d);
        if (bounds) {
          if (d.x + d.x0 < bounds[0].x) bounds[0].x = d.x + d.x0;
          if (d.y + d.y0 < bounds[0].y) bounds[0].y = d.y + d.y0;
          if (d.x + d.x1 > bounds[1].x) bounds[1].x = d.x + d.x1;
          if (d.y + d.y1 > bounds[1].y) bounds[1].y = d.y + d.y1;
        } else
          bounds = [
            { x: d.x + d.x0, y: d.y + d.y0 },
            { x: d.x + d.x1, y: d.y + d.y1 },
          ];
        break;
      }
    }
  }
  postMessage(words);
};
