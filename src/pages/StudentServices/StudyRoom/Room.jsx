import styles from "./Room.module.css";
import reservationArrow from "../../../assets/image/StudyRooming/StudyRoomArrow.png"

const Room = ({ name, image, pos, sit }) => {
    return (
        <div className={styles.Room}>
            <img src={image} alt={name} className={styles.RoomImg} />
            <div className={styles.roombody}>
                <div className={styles.roomInfo}>
                    <div className={styles.roomNum}>{name}</div>
                    <div className={styles.roomPos}>위치 : {pos}</div>
                    <div className={styles.roomSit}>좌석 : {sit}</div>
                </div>
                <button className={styles.reservation} onClick={() => window.location.href = "https://ari.anyang.ac.kr/main.do"}>
                    <img src={reservationArrow} alt="reservation-arrow" className={styles.reservationArrow} />
                </button>
            </div>
        </div>
    );
};

export default Room;
