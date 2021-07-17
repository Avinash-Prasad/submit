import React, { useState } from "react";
import ReactDOM from "react-dom";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prism/components/prism-clike";
import "prismjs/components/prism-javascript";

import "./styles.css";

function App() {
  const [code, setCode] = useState(
    `
// Long line without overflow-wrap
const mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm = 'has a bug'.
  `.trim()
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          wordWrap: "normal",
          whiteSpace: "nowrap"
        }}
      />
      <style>
        {`.token,.token.comment,.token.doctype,.token.prolog{color:#90a4ae}.token.punctuation{color:#9e9e9e}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#e91e63}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#4caf50}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#795548}.token.atrule,.token.attr-value,.token.keyword{color:#3f51b5}.token.function{color:#f44336}.token.important,.token.regex,.token.variable{color:#ff9800}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}`}
      </style>
    </div>
  );
}

const Element = document.getElementById("Rooot");
ReactDOM.render(<App />, Element);
