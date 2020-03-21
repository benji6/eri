import './_code-snippet.css'
import './_highlight.js.css'
import * as React from 'react'
import hljs from 'highlight.js'
import reactElementToJSXString from 'react-element-to-jsx-string'

export default function CodeSnippet({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <pre className="d-code-snippet">
      <code
        className="language-jsx"
        dangerouslySetInnerHTML={{
          __html: hljs
            .highlight('jsx', '(' + reactElementToJSXString(children))
            .value.slice(1),
        }}
      />
    </pre>
  )
}
