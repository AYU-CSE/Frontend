import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/Nav/Nav";
import Hamburger from "../../../components/Hamburger/Hamburger";
import updatedBoardData from "../openBoardData";

import styles from "./openBoardDetail.module.css";

const OpenBoardDetail = () => {
  const { id } = useParams();
  const post = updatedBoardData.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <div className={styles.community}>
        <Nav />
        <main className={styles.community_main}>
          <header className={styles.community_header}>
            <div>
              커뮤니티 &gt; <span>오픈게시판</span>
            </div>
          </header>
          <p className={styles.error_message}>게시글을 찾을 수 없습니다.</p>
          <Hamburger />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.community}>
      <Header />
      <main className={styles.community_main}>
        <header className={styles.community_header}>
          <div>
            커뮤니티 &gt; <span>오픈게시판</span>
          </div>
        </header>

        <section className={styles.open_community_detail}>
          <header>
            <div className={styles.open_community_detail_header_left}>
              <span>No.{post.id}</span>
              <span>조회수 {post.views}</span>
            </div>
            <span>{post.date}</span>
          </header>
          <div className={styles.open_community_detail_title}>
            <h2 className={styles.open_community_title}>{post.title}</h2>
            <div className={styles.community_dibs}></div>
          </div>
          <pre className={styles.post_content}>{post.content}</pre>
          <footer>
            <span>좋아요♡</span>
            <a>답글 달기</a>
            <span>댓글 20</span>
          </footer>
        </section>
        <div className={styles.hr}></div>

        <Hamburger />
      </main>
      <Footer />
    </div>
  );
};

export default OpenBoardDetail;
