import React, { useState } from "react";
import styles from "./openBoardDetail.module.css";

const ReplyForm = ({ onSubmit }) => {
  const [replyText, setReplyText] = useState(""); // 입력값 상태

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onSubmit(replyText); // 부모 컴포넌트에 입력값 전달
      setReplyText(""); // 입력값 초기화
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.replyForm}>
      <textarea
        className={styles.replyInput}
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="답글을 입력하세요..."
      />
      <button type="submit" className={styles.replyButton}>
        등록
      </button>
    </form>
  );
};

export default ReplyForm;
