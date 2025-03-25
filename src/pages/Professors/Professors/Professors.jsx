import "./Professors.css";
import professors from "./Professorsdata.js";

const Professors = () => {
    const [headProfessor, ...otherProfessors] = professors;
console.log(professors)
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
