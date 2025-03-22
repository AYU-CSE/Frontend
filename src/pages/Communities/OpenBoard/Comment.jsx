import React, { useState } from "react";
import profileImage from "../../../assets/image/profile_temp.jpg";
import ReplyForm from "../../../components/Comment/ReplyForm";
import styles from "./openBoardDetail.module.css";
import commentData from "./commentData"; // commentData 불러와야 함

const getCommentById = (id, data) => {
  for (const comment of data) {
    if (comment.id === id) return comment;
    if (comment.replies && comment.replies.length > 0) {
      const found = getCommentById(id, comment.replies);
      if (found) return found;
    }
  }
  return null;
};

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
    const parts = [];
    let lastIndex = 0;

    text.replace(regex, (match, p1, offset) => {
      // 이전 텍스트 넣기
      if (offset > lastIndex) {
        parts.push(text.slice(lastIndex, offset));
      }

      const commentId = parseInt(p1);
      const comment = getCommentById(commentId, commentData);
      const preview = comment
        ? comment.content.trim().split("\n")[0].slice(0, 30)
        : "내용 없음";

      parts.push(
        <div
          className={styles.quatBox}
          key={offset}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(`comment-${commentId}`);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
        >
          {/* 인용 헤더 */}
          <div className={styles.quatHeader}>
            {comment?.author}님의 댓글 #{commentId}
          </div>

          {/* 인용 본문 */}
          <div className={styles.quatContent} style={{}}>
            {preview}
          </div>
        </div>
      );

      lastIndex = offset + match.length;
    });

    // 남은 텍스트
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
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
          {/* 댓글에서 #a 형태의 태그 찾아서 포맷팅 */}
          <div
            className={styles.commentContent}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {formatContent(content)}
          </div>

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
