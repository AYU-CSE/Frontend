import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import down_arrow from "../../../assets/icons/down_arrow.png";
import styles from "./LectureRoomInfo.module.css";

const LectureRoomInfo = ({ room, lecturesData, currentTime }) => {
  const navigate = useNavigate();
  const [lectureInfo, setLectureInfo] = useState({
    name: "-",
    time: "-",
    status: "사용 가능",
  });

  const handleGoToTimetable = () => {
    navigate("/time-table");
  };

  // 요일 계산
  const getToday = () => {
    const days = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];
    return days[new Date().getDay()];
  };

  // 종료 시간 계산 함수: (period - 1)시간 + 50분
  const calculateEndTime = (startTime, period = 1) => {
    const [hour, minute] = startTime.split(":").map(Number);
    const startInMinutes = hour * 60 + minute;
    const endInMinutes = startInMinutes + (period - 1) * 60 + 50;
    const endHour = String(Math.floor(endInMinutes / 60)).padStart(2, "0");
    const endMinute = String(endInMinutes % 60).padStart(2, "0");
    return `${endHour}:${endMinute}`;
  };

  useEffect(() => {
    const findCurrentLecture = () => {
      const today = getToday();
      const nowMinutes = (() => {
        const [h, m] = currentTime.split(":").map(Number);
        return h * 60 + m;
      })();

      const roomLectures = lecturesData.find((data) => data.room === room);
      if (!roomLectures) return;

      for (let i = 0; i < roomLectures.lectures.length; i++) {
        const lecture = roomLectures.lectures[i];
        if (lecture.day !== today) continue;

        const [startHour, startMinute] = lecture.time.split(":").map(Number);
        const startMinutes = startHour * 60 + startMinute;
        const period = lecture.period || 1;
        const endMinutes = startMinutes + (period - 1) * 60 + 50;

        if (nowMinutes >= startMinutes && nowMinutes < endMinutes) {
          const endTime = calculateEndTime(lecture.time, period);
          setLectureInfo({
            name: lecture.name,
            time: `${lecture.time} ~ ${endTime}`,
            status: "강의중",
          });
          return;
        }
      }

      // 현재 시간에 해당하는 강의가 없으면
      setLectureInfo({ name: "-", time: "-", status: "사용 가능" });
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
          <img
            src={down_arrow}
            alt="show-next-timeline"
            className={styles.nextTime}
          />
        </div>
        <div className={styles.lectureStatement}>
          <div
            className={
              lectureInfo.status === "강의중"
                ? styles.stateCircleActive
                : styles.stateCircle
            }
          >
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
