import { useState, useEffect } from "react";

import styles from "../notices.module.css";
import Nav from "../../../components/Nav/Nav";
console.log(styles);

const Announcement = () => {
  return (
    <div>
      <Nav />
      <main className={styles.notices_main}>
        <header className={styles.notices_header}>
          <div>
            공지 &gt; <span>공지사항</span>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Announcement;
