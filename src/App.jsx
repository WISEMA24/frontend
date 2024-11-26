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
  InsertImage,
} from "@mdxeditor/editor";
import { useState } from "react";
import Toolbar from "./Toolbar";

function App() {
  const [markdown, setMarkdown] = useState("");

  const savetoFile = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'notiz.md';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      <Toolbar
        onSave={savetoFile}
      />
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
              </>
            ),
          }),
          headingsPlugin(),
        ]}
      />
    </>
  );
}

export default App;





