// 학과 안내
import "./Department.css"
const Department = () => {
  return (
    <div className="Department">
      <span>학과 안내</span>
      <pre>{`
정보화 사회를 능동적으로 선도함으로써 인류공영에 기여하는 전문 인력의 양성을 목표로
기본적인 컴퓨터관련 기술에 대한 체계적인 학습과 급변하는 정보기술 발전에 부합하는 스마트모바일 컴퓨팅, 정보보호 및 보안,
인터넷 응용기술, 인공지능, 병렬컴퓨터, 차세대 데이터베이스, 자연어 처리, 컴퓨터구조설계, 임베디드 시스템 등에 대한 학문을 연구한다.
      `}</pre>
    </div>
  )
};

export default Department;
