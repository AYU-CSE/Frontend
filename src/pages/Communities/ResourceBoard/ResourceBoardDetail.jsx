import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Hamburger from "../../../components/Hamburger/Hamburger";
import updatedBoardData from "../resourceBoardData";

import profileImage from "../../../assets/image/profile_temp.jpg";
import bookmarkLine from "../../../assets/icons/bookmark-line.svg";
import bookmarkFill from "../../../assets/icons/bookmark-fill.svg";

import styles from "./ResourceBoardDetail.module.css";

const ResourceBoardDetail = () => {
  const { id } = useParams();
  const post = updatedBoardData.find((item) => item.id === parseInt(id));

  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!post) {
    return (
      <div className={styles.community}>
        <Nav />
        <main className={styles.community_main}>
          <header className={styles.community_header}>
            <div>
              커뮤니티 &gt; <span>자료실</span>
            </div>
          </header>
          <p className={styles.errorMessage}>게시글을 찾을 수 없습니다.</p>
          <Hamburger />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.community}>
      <Nav />
      <main className={styles.community_main}>
        <header className={styles.community_header}>
          <div>
            커뮤니티 &gt; <span>자료실</span>
          </div>
        </header>

        <div className={styles.postWrapper}>
          <aside className={styles.authorProfile}>
            <div className={styles.profileImageWrapper}>
              <img src={profileImage} alt="프로필 이미지" />
            </div>
            <span className={styles.authorName}>{post.author}</span>
          </aside>

          <section className={styles.postContentWrapper}>
            <header className={styles.postHeader}>
              <div className={styles.postHeaderLeft}>
                <span>No.{post.id}</span>
                <span>조회수 {post.views}</span>
              </div>
              <span>{post.date}</span>
            </header>

            <div className={styles.postTitleWrapper}>
              <h2>{post.title}</h2>
              <button
                className={styles.bookmarkButton}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <img
                  src={isBookmarked ? bookmarkFill : bookmarkLine}
                  alt="북마크 버튼"
                />
              </button>
            </div>

            <pre className={styles.postContent}>{post.content}</pre>

            <footer className={styles.postFooter}></footer>
          </section>
        </div>

        <Hamburger />
      </main>
      <Footer />
    </div>
  );
};

export default ResourceBoardDetail;
