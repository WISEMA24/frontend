
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
              <BlockTypeSelect/>
              <CodeToggle/>
              <CreateLink/>
              <InsertImage/>
              <UndoRedo/>
            </>
          ),
        }),
        headingsPlugin(),
      ]}
    />
  );
}

export default App;
