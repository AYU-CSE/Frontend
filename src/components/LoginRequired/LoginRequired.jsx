import styles from "./LoginRequired.module.css";
import enter from "../../assets/icons/enter.png";
import back from "../../assets/icons/back.png";
import { useNavigate } from "react-router-dom";

const LoginRequired = () => {
  const nav = useNavigate();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          커뮤니티 페이지를 이용 하시려면 로그인이 필요합니다.
        </div>
        <button
          className={styles.go_to_login}
          onClick={() => {
            nav("/login");
          }}
        >
          로그인 페이지로 이동하기<img src={enter}></img>
        </button>
        <button
          className={styles.go_to_back}
          onClick={() => {
            nav(-1);
          }}
        >
          이전 페이지로 돌아가기<img src={back}></img>
        </button>
      </div>
    </div>
  );
};

export default LoginRequired;
