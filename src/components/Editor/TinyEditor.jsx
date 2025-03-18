import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCEEditor = () => {
  const [content, setContent] = useState("Hello, World!");

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const apiKey = import.meta.env.VITE_TINYMCE_API_KEY || "no-api-key";

  return (
    <div>
      <h1>TinyMCE Quick Start Guide</h1>
      <form method="post">
        <Editor
          apiKey={apiKey}
          initialValue={content}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
               alignleft aligncenter alignright alignjustify | \
               bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
      </form>
    </div>
  );
};

export default TinyMCEEditor;
