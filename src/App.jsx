import "./App.css";
import "@mdxeditor/editor/style.css";
import {
  BoldItalicUnderlineToggles,
  headingsPlugin,
  MDXEditor,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <MDXEditor
      markdown={markdown}
      onChange={setMarkdown}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
            </>
          ),
        }),
        headingsPlugin(),
      ]}
    />
  );
}

export default App;
