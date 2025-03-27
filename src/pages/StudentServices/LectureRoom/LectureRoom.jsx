import { useState, useEffect } from "react";
import styles from "./LectureRoom.module.css";
import Nav from "../../../components/Nav/Nav";
import LectureRoomInfo from "./LectureRoomInfo.jsx";
import Footer from "../../../components/Footer/Footer";
import lecturesData from "./LectureData.js"; // 강의 데이터

const LectureRoom = () => {
  // 현재 시간을 "HH:MM" 형식으로 반환하는 함수
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime()); // 현재 시간

  // 컴포넌트가 마운트될 때마다 현재 시간을 갱신
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // 1분마다 시간 갱신

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 클리어
  }, []);

  return (
    <div>
      <Nav />
      <main className={styles.studentService_main}>
        <header className={styles.studentService_header}>
          <div>
            학생 서비스 &gt; <span>강의실</span>
          </div>
        </header>

        {/* 3층 */}
        <div className={styles.floorBlock}>
          <div className={styles.floor}>3층</div>
          <LectureRoomInfo room="301호" currentTime={currentTime} lecturesData={lecturesData} />
          <LectureRoomInfo room="306호" currentTime={currentTime} lecturesData={lecturesData} />
        </div>

        {/* 6층 */}
        <div className={styles.floorBlock}>
          <div className={styles.floor}>6층</div>
          <LectureRoomInfo room="601호" currentTime={currentTime} lecturesData={lecturesData} />
          <LectureRoomInfo room="606호" currentTime={currentTime} lecturesData={lecturesData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LectureRoom;
