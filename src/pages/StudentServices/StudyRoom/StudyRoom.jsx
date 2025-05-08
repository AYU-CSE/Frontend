import { useState, useEffect } from "react";
import styles from "./StudyRoom.module.css";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import Room from "./Room";
import StudyRoomData from "./StudyRoomData";

// 이미지 파일 import
import SelfStudyRoom1 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom1.jpg";
import SelfStudyRoom2 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom2.jpg";
import SelfStudyRoom3 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom3.jpg";
import SelfStudyRoom4 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom4.jpg";
import SelfStudyRoom5 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom5.jpg";
import SelfStudyRoom6 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom6.jpg";
import SelfStudyRoom7 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom7-1.jpg";
import SelfStudyRoom8 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom7-2.jpg";
import SelfStudyRoom9 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom8-1.jpg";
import SelfStudyRoom10 from "../../../../src/assets/image/StudyRooming/SelfStudyRoom8-2.jpg";


// 이미지 매핑
const roomImages = {
  "SelfStudyRoom1.png": SelfStudyRoom1,
  "SelfStudyRoom2.png": SelfStudyRoom2,
  "SelfStudyRoom3.png": SelfStudyRoom3,
  "SelfStudyRoom4.png": SelfStudyRoom4,
  "SelfStudyRoom5.png": SelfStudyRoom5,
  "SelfStudyRoom6.png": SelfStudyRoom6,
  "SelfStudyRoom7-1.png": SelfStudyRoom7,
  "SelfStudyRoom7-2.png": SelfStudyRoom8,
  "SelfStudyRoom8-1.png": SelfStudyRoom9,
  "SelfStudyRoom8-2.png": SelfStudyRoom10,
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
              <Room key={room.id} name={room.name} image={roomImages[room.image]} pos={room.pos} sit={room.sit} code={room.code} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudyRoom;
