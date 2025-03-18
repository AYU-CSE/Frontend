import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const apiKey = import.meta.env.VITE_TINYMCE_API_KEY || "no-api-key";

export default function TinyEditor() {
  return (
    <Editor
      apiKey={apiKey}
      init={{
        menubar: false,
        plugins: [
          // Core editing features
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog typography | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
      }}
      initialValue="Welcome to TinyMCE!"
    />
  );
}
