import "./_code-snippet.css";
import "./_highlight.js.css";
import * as React from "react";
import CodeSnippet from "./_CodeSnippet";

import reactElementToJSXString from "react-element-to-jsx-string";

export default function ReactCodeSnippet({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(reactElementToJSXString(children));
  return (
    <CodeSnippet language="jsx">
      {reactElementToJSXString(children)}
    </CodeSnippet>
  );
}
