import React, { useState, useRef, useEffect } from "react";
import styles from "./ReplyForm.module.css";

const ReplyForm = ({ onSubmit }) => {
  const [replyText, setReplyText] = useState(""); // 입력값 상태
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 높이 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 내용에 맞게 높이 조절
    }
  }, [replyText]); // replyText 변경 시마다 실행

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
        ref={textareaRef}
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
