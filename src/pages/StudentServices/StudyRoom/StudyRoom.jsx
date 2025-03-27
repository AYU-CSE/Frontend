import { useState, useEffect } from "react";
import styles from "./StudyRoom.module.css";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import Room from "./Room";
import StudyRoomData from "./StudyRoomData";

// 이미지 파일 import
import SelfStudyRoom1 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom1.png";
import SelfStudyRoom2 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom1.png";

// 이미지 매핑
const roomImages = {
  "SelfStudyRoom1.png": SelfStudyRoom1,
  "SelfStudyRoom1.png": SelfStudyRoom2,
};

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
        <div className={styles.studyroomBody}>
          <div className={styles.studyroom}>
            {StudyRoomData.map((room) => (
              <Room key={room.id} name={room.name} image={roomImages[room.image]} pos={room.pos} sit={room.sit} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudyRoom;
