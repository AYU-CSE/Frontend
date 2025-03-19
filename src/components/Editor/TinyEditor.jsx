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
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | addcomment showcomments | spellcheckdialog typography | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",

        // 이건 뭔지 모르겠음 일단 놔둠둠
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
      }}
      initialValue=""
    />
  );
}
