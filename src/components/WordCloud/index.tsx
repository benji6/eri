import "./style.css";
import * as React from "react";

const XMLNS = "http://www.w3.org/2000/svg";

// If you change this then update the value of --aspect-ratio in the CSS
const ASPECT_RATIO = 5 / 3;
const MAX_RADIUS = Math.hypot(ASPECT_RATIO / 2, 0.5);
const MIN_FONT_SIZE = 0.025;
const FONT_SIZE_RANGE = 0.125;

// This figure is the ratio of word space usage to total svg viewbox.
// Manual tests indicate that this ratio places all words provided
// 50% of the time which makes it a nice balance between displaying
// as many words as possible and not having too much empty space.
const OPTIMAL_WORD_SPACE_USAGE = 0.76;

interface IRect {
  x: number;
  y: number;
  height: number;
  width: number;
}

const getRange = (xs: number[]): [min: number, max: number] => {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < xs.length; i++) {
    const x = xs[i];
    if (x < min) min = x;
    if (x > max) max = x;
  }
  return [min, max];
};

const checkIfRectanglesIntersect = (rectA: IRect, rectB: IRect): boolean =>
  rectA.x + rectA.width / 2 >= rectB.x - rectB.width / 2 &&
  rectA.x - rectA.width / 2 <= rectB.x + rectB.width / 2 &&
  rectA.y + rectA.height / 2 >= rectB.y - rectB.height / 2 &&
  rectA.y - rectA.height / 2 <= rectB.y + rectB.height / 2;

const checkIfRectangleNotContained = (rect: IRect) =>
  rect.x < rect.width / 2 ||
  rect.x > ASPECT_RATIO - rect.width / 2 ||
  rect.y < rect.height / 2 ||
  rect.y > 1 - rect.height / 2;

const archimedeanSpiral = (theta: number): [x: number, y: number] => {
  const r = 0.001 * theta;
  return [r * Math.cos(theta) * ASPECT_RATIO, r * Math.sin(theta)];
};

export interface IProps extends React.SVGProps<SVGSVGElement> {
  words: { [word: string]: number };
}

interface IUnplacedWord {
  fontSize: number;
  height: number;
  width: number;
  weighting: number;
  word: string;
}

interface IPlacedWord extends IUnplacedWord, IRect {}

export default function WordCloud({ words, ...rest }: IProps) {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [renderData, setRenderData] = React.useState<IPlacedWord[]>([]);

  React.useEffect(() => {
    const svgEl = svgRef.current!;
    const weightings = Object.values(words);
    if (!weightings.length || !svgEl) return;

    const [minWeighting, maxWeighting] = getRange(weightings);
    const weightingRange = maxWeighting - minWeighting;
    const unplacedWords: IUnplacedWord[] = [];

    const sortedWordEntries = Object.entries(words).sort((a, b) => {
      const weightingDifference = b[1] - a[1];
      if (weightingDifference) return weightingDifference;
      return b[0].length - a[0].length;
    });

    for (let i = 0; i < sortedWordEntries.length; i++) {
      const [word, weighting] = sortedWordEntries[i];
      const textEl = document.createElementNS(XMLNS, "text");
      const fontSize = weightingRange
        ? ((weighting - minWeighting) / weightingRange) * FONT_SIZE_RANGE +
          MIN_FONT_SIZE
        : MIN_FONT_SIZE;
      textEl.setAttributeNS(null, "font-size", String(fontSize));
      textEl.setAttributeNS(null, "x", "-1");
      textEl.setAttributeNS(null, "y", "-1");
      textEl.textContent = word;
      svgEl.appendChild(textEl);
      const { height, width } = textEl.getBBox();
      svgEl.removeChild(textEl);

      // Reducing the height because the text boxes are about that much
      // bigger than the text they contain
      unplacedWords.push({
        fontSize,
        height,
        weighting,
        width,
        word,
      });
    }

    let totalArea = 0;
    for (let i = 0; i < unplacedWords.length; i++) {
      const { height, width } = unplacedWords[i];
      totalArea += height * width;
    }

    const wordSpaceUsage = totalArea / ASPECT_RATIO;
    const adjustmentRatio = Math.sqrt(
      OPTIMAL_WORD_SPACE_USAGE / wordSpaceUsage
    );

    for (let i = 0; i < unplacedWords.length; i++) {
      const word = unplacedWords[i];
      word.fontSize *= adjustmentRatio;
      word.height *= adjustmentRatio;
      word.width *= adjustmentRatio;
    }

    const placedWords: IPlacedWord[] = [];

    for (let i = 0; i < unplacedWords.length; i++) {
      let theta = 0;
      const word = unplacedWords[i] as IPlacedWord;
      let shouldPlaceWord = true;
      do {
        const [x, y] = archimedeanSpiral(theta);
        if (Math.hypot(x, y) > MAX_RADIUS) shouldPlaceWord = false;
        word.x = (x + 0.5) * ASPECT_RATIO;
        word.y = y + 0.5;

        theta += 0.2;
      } while (
        shouldPlaceWord &&
        (checkIfRectangleNotContained(word) ||
          placedWords.some((placedWord) =>
            checkIfRectanglesIntersect(word, placedWord)
          ))
      );
      if (shouldPlaceWord) placedWords.push(word);
    }

    setRenderData(placedWords);
  }, [svgRef, words]);

  return (
    <svg
      {...rest}
      className="word-cloud"
      ref={svgRef}
      viewBox={`0 0 ${ASPECT_RATIO} 1`}
      width="100%"
    >
      <g style={{ "--total-words": renderData.length } as React.CSSProperties}>
        {renderData.map(({ fontSize, weighting, word, x, y }, i) => (
          <text
            className="fade-in word-cloud__word"
            dy={fontSize * 0.3}
            fontSize={fontSize}
            key={word}
            style={
              {
                "--word-number": i,
                "--word-x": x,
                "--word-y": y,
              } as React.CSSProperties
            }
            textAnchor="middle"
            x={x}
            y={y}
          >
            <title>{weighting}</title>
            {word}
          </text>
        ))}
      </g>
    </svg>
  );
}
