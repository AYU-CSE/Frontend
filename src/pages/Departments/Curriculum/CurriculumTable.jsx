import "./Curriculum.css"
const CurriculumTable = () => {
    return (
        <div className="CrriculumTable">
  <table className="course-table">
      <thead className="Yellow">
        <tr>
          <th rowSpan="2">학년</th>
          <th colSpan="3">1학기</th>
          <th colSpan="3">2학기</th>
        </tr>
        <tr>
          <th>과목명</th>
          <th className="subject-type">과목구분</th>
          <th className="credits">학점</th>
          <th>과목명</th>
          <th className="subject-type">과목구분</th>
          <th className="credits">학점</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="4">1</td>
          <td>컴퓨터개론</td>
          <td></td>
          <td>3</td>
          <td>인공지능개론</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>프로그래밍 입문</td>
          <td></td>
          <td>3</td>
          <td>프로그래밍 응용</td>
          <td></td>
          <td>3</td>
        </tr>
      </tbody>
      <tbody>
      <tr>
          <td rowSpan="5">2</td>
          <td>데이터구조</td>
          <td>필수</td>
          <td>3</td>
          <td>객체지향프로그래밍</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>리눅스시스템</td>
          <td></td>
          <td>3</td>
          <td>시스템프로그래밍</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>이산수학</td>
          <td>필수</td>
          <td>3</td>
          <td>웹프로그래밍</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>전공세미나 I : 전공책읽기</td>
          <td></td>
          <td>1</td>
          <td>파이썬파일처리</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>컴퓨터구조</td>
          <td>필수</td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td rowSpan="8">3</td>
          <td>데이터구조응용</td>
          <td></td>
          <td>3</td>
          <td>리눅스프로그래밍</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>데이터베이스</td>
          <td>필수</td>
          <td>3</td>
          <td>소프트웨어공학</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>운영체제</td>
          <td>필수</td>
          <td>3</td>
          <td>전공세미나 II : 전공글쓰기</td>
          <td></td>
          <td>1</td>
        </tr>
        <tr>
          <td>위도우즈시스템 프로그래밍</td>
          <td></td>
          <td>3</td>
          <td>전공세미나 IV : 취업역량강화</td>
          <td></td>
          <td>1</td>
        </tr>
        <tr>
          <td>전공세미나 III : 전공워크샵</td>
          <td></td>
          <td>1</td>
          <td>컴퓨터그래픽스</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>프로그래밍언어구성론</td>
          <td></td>
          <td>3</td>
          <td>JAVA프로그래밍</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>현장실습</td>
          <td></td>
          <td>12</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td rowSpan="3">4</td>
          <td>테이터베이스 프로그래밍</td>
          <td></td>
          <td>3</td>
          <td>네트워크프로그래밍</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>인공지능</td>
          <td></td>
          <td>3</td>
          <td>IT 캡스톤디자인 II</td>
          <td></td>
          <td>3</td>
        </tr>
        <tr>
          <td>IT 캡스톤디자인 I</td>
          <td></td>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
    </table>
        </div>
    )
  };
  
  export default CurriculumTable;
  