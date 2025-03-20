import { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const apiKey = import.meta.env.VITE_TINYMCE_API_KEY || "no-api-key";

export default function TinyEditor({ onEditorChange }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fixPassiveEventListener = (event) => {};

    document.addEventListener("touchmove", fixPassiveEventListener, {
      passive: true,
    });

    return () => {
      document.removeEventListener("touchmove", fixPassiveEventListener);
    };
  }, []);

  return (
    <Editor
      apiKey={apiKey}
      value={content}
      onEditorChange={(newContent) => {
        setContent(newContent);
        if (onEditorChange) {
          onEditorChange(newContent);
        }
      }}
      init={{
        menubar: false,
        theme: "silver",
        resize: false,
        plugins: [
          // Core editing features
          "anchor",
          "autoresize",
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
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | addcomment showcomments | spellcheckdialog typography | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",

        min_height: 400,
        max_height: 800,
        autoresize_bottom_margin: 10,
      }}
      initialValue=""
    />
  );
}
