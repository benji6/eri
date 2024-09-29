import "./style.css";
import { CSSProperties, SVGProps, useEffect, useRef, useState } from "react";
import { SVG_HEIGHT, SVG_WIDTH } from "../constants";

interface WordToRender {
  rotate: number;
  size: number;
  text: string;
  weighting: number;
  x: number;
  y: number;
}

export interface IProps extends SVGProps<SVGSVGElement> {
  words: Record<string, number>;
}

export default function WordCloudPrimary({ words, ...rest }: IProps) {
  const [wordsToRender, setWordsToRender] = useState<WordToRender[]>([]);
  const workerRef = useRef<Worker>();

  useEffect(() => {
    const wordCloudWorker = new Worker(
      new URL("wordCloudWorker.ts", import.meta.url),
      { type: "module" },
    );
    wordCloudWorker.onmessage = ({ data }) => setWordsToRender(data);
    workerRef.current = wordCloudWorker;
    return () => wordCloudWorker.terminate();
  }, []);

  useEffect(() => {
    if (!workerRef.current) {
      console.error("workerRef.current is not set in Eri WordCloud");
      return;
    }
    workerRef.current.postMessage(words);
  }, [words]);

  if (process.env.NODE_ENV !== "production" && wordsToRender.length) {
    const wordCount = Object.keys(words).length;
    const wordsNotRenderedCount = wordCount - wordsToRender.length;
    if (wordsNotRenderedCount) {
      const textToRender = new Set(wordsToRender.map(({ text }) => text));

      console.debug(
        `Eri WordCloud only rendered ${(
          (wordsToRender.length / wordCount) *
          100
        ).toFixed(1)}% of words.`,
        "Failed to render the following words:",
        Object.keys(words).filter((word) => !textToRender.has(word)),
      );
    }
  }

  return (
    <svg {...rest} viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}>
      {wordsToRender.map(({ rotate, size, text, weighting, x, y }) => (
        <g
          key={text}
          className="fade-in word-cloud__word-container"
          transform={`rotate(${(rotate / Math.PI) * 180} ${x} ${y})`}
        >
          <text
            className="word-cloud__word"
            style={
              {
                "--word-from-x": `${x - SVG_WIDTH / 2}px`,
                "--word-from-y": `${y - SVG_HEIGHT / 2}px`,
              } as CSSProperties
            }
            fontSize={size}
            x={x}
            y={y}
            textAnchor="middle"
          >
            <title>{weighting}</title>
            {text}
          </text>
        </g>
      ))}
    </svg>
  );
}
