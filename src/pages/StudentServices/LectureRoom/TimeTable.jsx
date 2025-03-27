// 스터디룸
import Nav from "../../../components/Nav/Nav";
import exampleTimeLine from "../../../../src/assets/image/StudyRooming/timeTable/example.png";
import Footer from "../../../components/Footer/Footer";
import styles from "../LectureRoom/TimeTable.module.css";

const TimeTable = () => {
    return (
        <div>
            <Nav />
            <main className={styles.studentService_main}>
                <header className={styles.studentService_header}>
                    <div>
                        학생 서비스 &gt; <span>301호 시간표</span>
                    </div>
                </header>
                <img src={exampleTimeLine} alt="TimeLine" className={styles.timeTableImg} />
            </main>
            <Footer />
        </div >
    );
};

export default TimeTable;
