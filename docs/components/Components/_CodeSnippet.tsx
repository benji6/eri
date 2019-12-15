import hljs from 'highlight.js'
import * as React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import './_code-snippet.css'
import './_highlight.js.css'

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
