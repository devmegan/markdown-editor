import React from "react";
import SimpleMDE from "react-simplemde-editor";
import ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import "easymde/dist/easymde.min.css";
import { CONTENT } from "./Markdown/Content";
  
const customRendererOptions = {
    previewRender(plainText) {
        return ReactDOMServer.renderToString(
            <ReactMarkdown children={plainText} />
        );
    },
    hideIcons: ['quote'],
    spellChecker: false,
};
  
export default function Editor() {
  return (
    <SimpleMDE
      value={CONTENT}
      options={customRendererOptions}
    />
  );
}