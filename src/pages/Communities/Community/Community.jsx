import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./Community.css";

const Community = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [allItems, setAllItems] = useState([]);

  const baseItems = [
    {
      title: "React 기초",
      lecture: "프론트엔드 개발",
      author: "김철수",
      content: "React의 기본 개념을 설명합니다.",
      date: "2025-02-10",
      views: 100,
    },
    {
      title: "Node.js 서버",
      lecture: "백엔드 개발",
      author: "이영희",
      content: "Node.js 서버 설정 방법.",
      date: "2025-02-11",
      views: 85,
    },
    {
      title: "Python 데이터 분석",
      lecture: "데이터 과학",
      author: "박민수",
      content: "판다스를 활용한 데이터 분석.",
      date: "2025-02-12",
      views: 120,
    },
    {
      title: "HTML & CSS",
      lecture: "웹 기초",
      author: "정하나",
      content: "HTML과 CSS 기본 문법.",
      date: "2025-02-13",
      views: 90,
    },
    {
      title: "알고리즘 문제 풀이",
      lecture: "자료구조",
      author: "손준호",
      content: "DFS와 BFS를 설명합니다.",
      date: "2025-02-14",
      views: 75,
    },
  ];

  useEffect(() => {
    const generatedItems = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      ...baseItems[i % baseItems.length],
      date: `2025-02-${(i % 28) + 1}`,
      views: 50 + Math.floor(Math.random() * 150),
    }));
    setAllItems(generatedItems);
  }, []);

  const filteredItems = allItems.filter((item) => {
    if (filteredSearch === "") return true;
    switch (searchCategory) {
      case "title":
        return item.title.includes(filteredSearch);
      case "lecture":
        return item.lecture.includes(filteredSearch);
      case "author":
        return item.author.includes(filteredSearch);
      case "content":
        return item.content.includes(filteredSearch);
      default:
        return (
          item.title.includes(filteredSearch) ||
          item.lecture.includes(filteredSearch) ||
          item.author.includes(filteredSearch) ||
          item.content.includes(filteredSearch)
        );
    }
  });

  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setFilteredSearch(searchTerm);
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="community">
      <Header />
      <main className="community_main">
        <header className="community_header">
          <div>
            커뮤니티 &gt; <span>자료실</span>
          </div>
        </header>

        <div className="community_search">
          <select
            className="category_select"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="title">제목</option>
            <option value="lecture">강의명</option>
            <option value="author">작성자</option>
            <option value="content">내용</option>
          </select>
          <input
            type="text"
            placeholder="검색어 입력"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search_button" onClick={handleSearch}>
            검색
          </button>
        </div>

        <table className="community_table">
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>과목명</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <tr key={item.id} className="community_pointer">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.lecture}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>{item.views}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no_results">
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
