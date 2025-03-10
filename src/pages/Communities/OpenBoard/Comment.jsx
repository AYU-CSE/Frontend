import React, { useState } from "react";
import profileImage from "../../../assets/image/profile_temp.jpg";
import styles from "./openBoardDetail.module.css";

const Comment = ({ author, content, likes, replies }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes); // 초기 좋아요 개수 설정

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1); // 좋아요 취소 시 감소
    } else {
      setLikeCount(likeCount + 1); // 좋아요 클릭 시 증가
    }
    setIsLiked(!isLiked);
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
            <a>답글 달기</a>
          </footer>
        </section>
      </div>

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
