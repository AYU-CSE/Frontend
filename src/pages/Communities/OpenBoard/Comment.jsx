import React, { useState } from "react";
import profileImage from "../../../assets/image/profile_temp.jpg";
import ReplyForm from "../../../components/Comment/ReplyForm";
import styles from "./openBoardDetail.module.css";

const Comment = ({ id, author, content, likes, replies }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleLike = () => {
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  const handleReplySubmit = (replyText) => {
    console.log("답글 내용:", replyText);
    setShowReplyForm(false);
  };

  // 댓글 내용에 포함된 인용(#id)을 링크로 변환
  const formatContent = (text) => {
    const regex = /#(\d+)/g;
    return text.split(regex).map((part, index) => {
      if (index % 2 === 1) {
        return (
          <a
            key={index}
            href={`#comment-${part}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(`comment-${part}`);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            style={{ color: "var(--color-school)", fontWeight: "bold" }}
          >
            #{part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className={styles.commentWrapper} id={`comment-${id}`}>
      <div className={styles.commentBlock}>
        <aside className={styles.authorProfile}>
          <div className={styles.profileImageWrapper}>
            <img src={profileImage} alt="프로필 이미지" />
          </div>
          <span className={styles.authorName}>{author}</span>
        </aside>

        <section className={styles.commentContentWrapper}>
          {/* 댓글에서 #a 형태의 태그 찾아서 포맷팅팅 */}
          <pre className={styles.commentContent}>{formatContent(content)}</pre>

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

      {showReplyForm && <ReplyForm onSubmit={handleReplySubmit} />}

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
