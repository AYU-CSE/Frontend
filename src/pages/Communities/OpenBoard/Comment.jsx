import React, { useState } from "react";
import profileImage from "../../../assets/image/profile_temp.jpg";
import ReplyForm from "./ReplyForm";
import styles from "./openBoardDetail.module.css";

const Comment = ({ author, content, likes, replies }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes); // 초기 좋아요 개수 설정
  const [showReplyForm, setShowReplyForm] = useState(false); // 답글 폼 표시 여부

  const handleLike = () => {
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  const handleReplySubmit = (replyText) => {
    console.log("답글 내용:", replyText);
    setShowReplyForm(false); // 답글 등록 후 폼 닫기
  };

  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentBlock}>
        <aside className={styles.authorProfile}>
          <div className={styles.profileImageWrapper}>
            <img src={profileImage} alt="프로필 이미지" />
          </div>
          <span className={styles.authorName}>{author}</span>
        </aside>

        <section className={styles.commentContentWrapper}>
          <pre className={styles.commentContent}>{content}</pre>

          <footer className={styles.postFooter}>
            <a onClick={handleLike}>
              {isLiked ? "❤️" : "♡"} 좋아요 {likeCount}
            </a>
            <a onClick={() => setShowReplyForm(!showReplyForm)}>
              {showReplyForm ? "답글 취소" : "답글 달기"}
            </a>
          </footer>
        </section>
      </div>
      {/* 답글 입력 폼 */}
      {showReplyForm && <ReplyForm onSubmit={handleReplySubmit} />}

      {/* 대댓글이 있는 경우 재귀적으로 렌더링 */}
      {replies && replies.length > 0 && (
        <div className={styles.re_commentWrapper}>
          {replies.map((reply) => (
            <Comment key={reply.id} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
