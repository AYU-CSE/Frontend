import { useEffect, useState } from "react";
import "./FindIDModal.css";

// /findId경로로 확인
const FindIDModal = ({ onClose, initialMode }) => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  return (
    <div className="overlay">
      <div className="modal">
        <header className="modal_header">
          <button className="close_btn" onClick={onClose}>
            X
          </button>
        </header>
        <div className="modal_body">
          <section className="find_btn">
            <button
              className={`modal_body_findId ${
                mode === "findId" ? "active" : ""
              }`}
              onClick={() => setMode("findId")}
            >
              아이디 찾기
            </button>
            <button
              className={`modal_body_findPasswd ${
                mode === "findPasswd" ? "active" : ""
              }`}
              onClick={() => setMode("findPasswd")}
            >
              비밀번호 찾기
            </button>
            <hr className="modal_body_underLine"></hr>
          </section>
          {mode === "findId" && (
            <div className="findId_content">
              <section className="findId_name">
                <label className="findId_name_user">이름</label>
                <input type="text" />
              </section>
              <section className="findId_birth">
                <label className="findId_birth_user">생년월일 6자리</label>
                <input type="text" />
              </section>
            </div>
          )}
          {mode === "findPasswd" && (
            <div className="findPasswd_content">
              <section className="findPasswd_user_id">
                <label className="user_id">아이디</label>
                <input type="text" />
              </section>
              <section className="findPasswd_user_email">
                <label className="user_email">이메일</label>
                <input type="text" />
              </section>
            </div>
          )}
        </div>
        <footer className="modal_footer">
          <p>아이디 및 비밀번호 분실 문의</p>
          <ul>
            <li>•학 생 : 학사지원과 (031-467-0732)</li>
            <li>•대학원생 : 대학원교학과 (031-467-0853)</li>
            <li>•교직원 : 전산정보원 (031-467-0774)</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default FindIDModal;
