import "./Professors.css";

const Professors = () => {
    const professors = [
        {
            사진: "../public/image 32.png",
            이름: "이상홍",
            직책: "교수(학과장)",
            연구실: "아리관 308호",
            연락처: "031-467-0876",
            이메일: "shleedosa@anyang.ac.kr",
            학위: "대학원 박사졸업 - 경원대학교 전자계산학"
        },
        {
            사진: "../public/image 27.png",
            이름: "권희용",
            직책: "교수",
            연구실: "아리관 310호",
            연락처: "031-467-0878",
            이메일: "hykwon@anyang.ac.kr",
            학위: "대학원 박사졸업 - 서울대학교 컴퓨터공학"
        },
        {
            사진: "../public/image 31.png",
            이름: "김성규",
            직책: "교수",
            연구실: "아리관 312호",
            연락처: "031-467-0879",
            이메일: "sgkim@anyang.ac.kr",
            학위: "대학원 박사졸업 - 노스웨스턴대학교 전산학"
        },
        {
            사진: "../public/image 30.png",
            이름: "박성순",
            직책: "교수",
            연구실: "아리관 309호",
            연락처: "031-467-0877",
            이메일: "sspark@anyang.ac.kr",
            학위: "대학원 박사졸업 - 고려대학교 컴퓨터과학"
        },
        {
            사진: "../public/image 26.png",
            이름: "하은용",
            직책: "교수",
            연구실: "아리관 311호",
            연락처: "031-467-0873",
            이메일: "eyha@anyang.ac.kr",
            학위: "대학원 박사졸업 - 서울대학교 컴퓨터공학"
        },
    ];

    const [headProfessor, ...otherProfessors] = professors;

    return (
        <div className="professor-container">
            <div className="head-professor">
                <div className="professor-card">
                    <img src={headProfessor.사진} alt={headProfessor.이름} />
                    <div className="professor-info">
                        <p className="name">
                            {headProfessor.이름} <span className="position">{headProfessor.직책}</span>
                        </p>
                        <ul>
                            {Object.entries(headProfessor).map(
                                ([key, value]) =>
                                    key !== "사진" && key !== "이름" && key !== "직책" && (
                                        <li key={key}>
                                            <strong>{key}:</strong> {value}
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="professor-list">
    {otherProfessors.reduce((rows, professor, index) => {
        if (index % 2 === 0) {
            rows.push([professor]);
        } else {
            rows[rows.length - 1].push(professor);
        }
        return rows;
    }, []).map((row, rowIndex) => (
        <div className="professor-row" key={rowIndex}>
            {row.map((professor, colIndex) => (
                <div className="professor-card" key={colIndex}>
                    <img src={professor.사진} alt={professor.이름} />
                    <div>
                        <p className="name">
                            {professor.이름} <span className="position">{professor.직책}</span>
                        </p>
                        <ul>
                            {Object.entries(professor).map(
                                ([key, value]) =>
                                    key !== "사진" && key !== "이름" && key !== "직책" && (
                                        <li key={key}>
                                            <strong>{key}:</strong> {value}
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    ))}
</div>

        </div>
    );
};

export default Professors;
