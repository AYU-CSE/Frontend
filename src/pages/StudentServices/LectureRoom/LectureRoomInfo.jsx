import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import down_arrow from "../../../assets/icons/down_arrow.png"
import styles from "./LectureRoomInfo.module.css";

const LectureRoomInfo = ({ room, lecturesData, currentTime }) => {
  const navigate = useNavigate();
  const [lectureInfo, setLectureInfo] = useState({ name: "-", time: "-", status: "사용 가능" });

  const handleGoToTimetable = () => {
    navigate("/time-table");
  };

  // ✅ 강의 시간에 맞는 강의 찾기
  useEffect(() => {
    const findCurrentLecture = () => {
      const roomLectures = lecturesData.find((data) => data.room === room);

      if (!roomLectures) return;

      for (let i = 0; i < roomLectures.lectures.length; i++) {
        const lecture = roomLectures.lectures[i];
        const [start, end] = lecture.time.split(" ~ ");

        if (currentTime >= start && currentTime <= end) {
          if (lectureInfo.name !== lecture.name || lectureInfo.time !== lecture.time) {
            setLectureInfo({
              name: lecture.name,
              time: lecture.time,
              status: "강의중",
            });
          }
          return;
        }
      }

      if (lectureInfo.status !== "사용 가능") {
        setLectureInfo({ name: "-", time: "-", status: "사용 가능" });
      }
    };

    findCurrentLecture();
  }, [currentTime, room, lecturesData]);

  return (
    <div className={styles.LectureRoomInfo}>
      <div className={styles.Info}>
        <div className={styles.lectureRoomNum}>{room}</div>
        <div className={styles.lectureDepartment}>{lectureInfo.name}</div>
        <div className={styles.lectureTime}>
          <div className={styles.lectureTimeNow}>{lectureInfo.time}</div>
          <img src={down_arrow} alt="show-next-timeline" className={styles.nextTime} />
        </div>
        <div className={styles.lectureStatement}>
          <div className={lectureInfo.status === "강의중" ? styles.stateCircleActive : styles.stateCircle}>
            ●
          </div>
          <div className={styles.stateText}>{lectureInfo.status}</div>
        </div>
      </div>
      <button className={styles.lectureSchedule} onClick={handleGoToTimetable}>
        <div>시간표 보기</div>
      </button>
    </div>
  );
};

export default LectureRoomInfo;
