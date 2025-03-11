// 스터디룸
import { useState, useEffect } from "react";

import styles from "../studentService.module.css";
import Nav from "../../../components/Nav/Nav";

const StudyRoom = () => {
  return (
    <div>
      <Nav /> 
      <main className={styles.studentService_main}>
        <header className={styles.studentService_header}>
          <div>
            학생 서비스 &gt; <span>스터디룸 및 열람실</span>
          </div>
        </header>
      </main>
    </div>
  );
};

export default StudyRoom;
