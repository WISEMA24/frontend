import React, { useState, useEffect } from 'react';
import "@mdxeditor/editor/style.css";
import {
    BoldItalicUnderlineToggles,
    headingsPlugin,
    MDXEditor,
    toolbarPlugin,
    UndoRedo,
    BlockTypeSelect,
    CodeToggle,
    CreateLink,
    InsertImage,
    imagePlugin,
  } from "@mdxeditor/editor";
import Toolbar from "../Toolbar";
import './MarkdownFeld.css';

function MarkdownFeld() {
    const [markdown, setMarkdown] = useState("");


    const savetoFile = () => {
      const blob = new Blob([markdown], { type: "text/markdown" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "notiz.md";
      link.click();
      URL.revokeObjectURL(link.href);
    };
  
    return (

        <div style={{ gridColumn: 'span 3 / span 3' }}>
          <MDXEditor
            markdown={markdown}
            onChange={setMarkdown}
            plugins={[
              toolbarPlugin({
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                    <CodeToggle />
                    <CreateLink />
                    <InsertImage />
                    <UndoRedo />
                    <div style={{ display: "flex", flexGrow: 1 }}></div>
                    <Toolbar onSave={savetoFile} />
                  </>
                ),
              }),
              imagePlugin(),
              headingsPlugin(),
            ]}
          />
        </div>
    );
}

export default MarkdownFeld;
