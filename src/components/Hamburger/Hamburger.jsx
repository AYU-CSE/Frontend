import "./Hamburger.css";
import user from "../../assets/icons/user.svg";
import notice from "../../assets/icons/notice.svg";
import edit from "../../assets/icons/edit.svg";

function Hamburger() {
  return (
    <div className="hamburger_container">
      <label for="hamburger" id="hamburger_icon">
        <div className="hamburger_dropdown">
          <a className="hamburger_user">
            <img src={user} alt="마이페이지" />
          </a>
          <a className="hamburger_notice">
            <img src={notice} alt="알림" />
          </a>
          <a className="hamburger_writing">
            <img src={edit} alt="글쓰기" />
          </a>
        </div>

        <div className="hamburger_bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
    </div>
  );
}

export default Hamburger;
