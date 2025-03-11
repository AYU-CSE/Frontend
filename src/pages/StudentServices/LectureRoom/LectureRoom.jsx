import { useState, useEffect } from "react";

import styles from "../studentService.module.css";
import Nav from "../../../components/Nav/Nav";
import LectureRoomInfo from "./LectureRoomInfo.jsx";


const LectureRoom = () => {
  return (
    <div>
      <Nav />
      <main className={styles.studentService_main}>
        <header className={styles.studentService_header}>
          <div>
            학생 서비스 &gt; <span>강의실</span>
          </div>
        </header>
        <h2>3층 </h2>
        <LectureRoomInfo />
      </main>
    </div>
  );
};

export default LectureRoom;
