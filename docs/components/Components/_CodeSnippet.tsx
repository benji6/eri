import "./_code-snippet.css";
import "./_highlight.js.css";
import * as React from "react";
import hljs from "highlight.js";

interface IProps {
  children: string;
  language: "css" | "jsx" | "html";
}

export default function CodeSnippet({ children, language }: IProps) {
  // HACK: we use `isJsx` to trick highlight.js into highlighting our JSX nicely
  const isJsx = language === "jsx";
  const stringToHighlight = isJsx ? "(" + children : children;
  const highlightedString = hljs.highlight(stringToHighlight, {
    language,
  }).value;

  return (
    <pre className="d-code-snippet br-1 p-2">
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{
          __html: isJsx ? highlightedString.slice(1) : highlightedString,
        }}
      />
    </pre>
  );
}
