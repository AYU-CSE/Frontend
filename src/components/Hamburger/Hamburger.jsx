import { Link } from "react-router-dom";

import user from "../../assets/icons/user.svg";
import notice from "../../assets/icons/notice.svg";
import edit from "../../assets/icons/edit.svg";

import styles from "./Hamburger.module.css";

function Hamburger() {
  return (
    <div className={styles.hamburger_container}>
      <label htmlFor="hamburger" id={styles.hamburger_icon}>
        <div className={styles.hamburger_dropdown}>
          <a className={styles.hamburger_user}>
            <img src={user} alt="마이페이지" />
          </a>
          <a className={styles.hamburger_notice}>
            <img src={notice} alt="알림" />
          </a>
          <Link
            to={"/community/edit-post"}
            className={styles.hamburger_writing}
          >
            <img src={edit} alt="글쓰기" />
          </Link>
        </div>

        <div className={styles.hamburger_bar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
    </div>
  );
}

export default Hamburger;
