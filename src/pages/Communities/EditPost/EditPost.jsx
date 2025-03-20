import { useState } from "react";

import TinyMCEEditor from "../../../components/Editor/TinyEditor";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";

import styles from "./EditPost.module.css";

function EditPost() {
  const [category, setCategory] = useState("전체 게시판");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const categories = [
    "전체 게시판",
    "학업 게시판",
    "취업 게시판",
    "프로젝트 게시판",
    "정보 게시판",
  ];

  const handleSubmit = () => {
    console.log("category:", category);
    console.log("title:", title);
    console.log("content:", content);
  };

  return (
    <div>
      <Nav />
      <div className={styles.editPage}>
        <header className={styles.editorHeader}>
          <span>게시글 작성</span>
          <button onClick={handleSubmit}>등록</button>{" "}
        </header>
        <div className={styles.divider}></div>
        <section className={styles.contentContainer}>
          <div className={styles.contentLeft}>
            <header className={styles.contentHeader}>
              <select
                className={styles.postCategory}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <input
                className={styles.postTitle}
                type="text"
                placeholder="제목을 입력해 주세요."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </header>

            <TinyMCEEditor onEditorChange={setContent} />
          </div>
          <div className={styles.contentRight}></div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default EditPost;
