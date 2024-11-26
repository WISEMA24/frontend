import "./App.css";
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
  DiffSourceToggleWrapper,
  InsertImage,
} from "@mdxeditor/editor";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div class="editor_container">

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
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <CreateLink />
                <DiffSourceToggleWrapper />
                <InsertImage />
                <UndoRedo />
              </>
            ),
          }),
          headingsPlugin(),
        ]}
      />
    </div>
  );
}

export default App;
