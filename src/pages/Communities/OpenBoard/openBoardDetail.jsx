import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Hamburger from "../../../components/Hamburger/Hamburger";
import updatedBoardData from "../openBoardData";

import styles from "./openBoardDetail.module.css";

const OpenBoardDetail = () => {
  const { id } = useParams();
  const post = updatedBoardData.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <div className={styles.community}>
        <Header />
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
          <h2 className={styles.open_community_title}>{post.title}</h2>
          <div className={styles.post_info}>
            <span>작성자: {post.author}</span> |
            <span> 작성일: {post.date}</span> |
            <span> 조회수: {post.views}</span>
          </div>
          <p className={styles.post_content}>{post.content}</p>
        </section>

        <Hamburger />
      </main>
      <Footer />
    </div>
  );
};

export default OpenBoardDetail;
