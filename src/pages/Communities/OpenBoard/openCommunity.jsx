import React, { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./openCommunity.css";

const OpenCommunity = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [allItems, setAllItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체 게시판");
  const myUserName = "이영희"; // 임시 유저 이름

  const baseItems = [
    {
      board: "학업 게시판",
      title: "React 기초",
      author: "김철수",
      content: "React의 기본 개념을 설명합니다.",
      date: "2025-02-10",
      comment: 70,
      views: 100,
    },
    {
      board: "취업 게시판",
      title: "Node.js 서버",
      author: "이영희",
      content: "Node.js 서버 설정 방법.",
      date: "2025-02-11",
      comment: 75,
      views: 85,
    },
    {
      board: "프로젝트 게시판",
      title: "Python 데이터 분석",
      author: "박민수",
      content: "판다스를 활용한 데이터 분석.",
      date: "2025-02-12",
      comment: 100,
      views: 120,
    },
    {
      board: "정보 게시판",
      title: "HTML & CSS",
      author: "정하나",
      content: "HTML과 CSS 기본 문법.",
      date: "2025-02-13",
      comment: 3,
      views: 90,
    },
    {
      board: "학업 게시판",
      title: "알고리즘 문제 풀이",
      author: "손준호",
      content: "DFS와 BFS를 설명합니다.",
      date: "2025-02-14",
      comment: 10,
      views: 75,
    },
  ];

  useEffect(() => {
    const generatedItems = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      ...baseItems[i % baseItems.length],
      date: `2025-02-${(i % 28) + 1}`,
    }));
    setAllItems(generatedItems);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleMyBoardClick = () => {
    setSelectedCategory("나의 게시판");
    setCurrentPage(1);
  };

  const filteredItems = allItems
    .filter((item) => {
      const matchesCategory =
        selectedCategory === "전체 게시판" ||
        selectedCategory === "나의 게시판" ||
        item.board === selectedCategory;

      const matchesMyBoard =
        selectedCategory === "나의 게시판" ? item.author === myUserName : true;

      const matchesSearch =
        filteredSearch === "" ||
        (searchCategory === "title" && item.title.includes(filteredSearch)) ||
        (searchCategory === "author" && item.author.includes(filteredSearch)) ||
        (searchCategory === "content" &&
          item.content.includes(filteredSearch)) ||
        (searchCategory === "all" &&
          (item.title.includes(filteredSearch) ||
            item.author.includes(filteredSearch) ||
            item.content.includes(filteredSearch)));

      return matchesCategory && matchesMyBoard && matchesSearch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
            커뮤니티 &gt; <span>오픈게시판</span>
          </div>
        </header>

        {/* 카테고리 선택 */}
        <div className="community_category">
          <div className="category_left">
            {[
              "전체 게시판",
              "학업 게시판",
              "취업 게시판",
              "프로젝트 게시판",
              "정보 게시판",
            ].map((category) => (
              <div
                key={category}
                className={`category_bg ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div
            className={`category_right category_bg ${selectedCategory === "나의 게시판" ? "active" : ""}`}
            onClick={handleMyBoardClick}
          >
            나의 게시판
          </div>
        </div>

        {/* 게시글 목록 */}
        <table className="community_table">
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>댓글</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <tr key={item.id} className="community_pointer">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>{item.comment}</td>
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

        {/* 페이지네이션 */}
        <div className="community_pagination">
          {currentPage > 1 && (
            <a href="#" onClick={(e) => handlePageChange(e, currentPage - 1)}>
              &lt;
            </a>
          )}
          {[...Array(Math.ceil(filteredItems.length / itemsPerPage))].map(
            (_, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => handlePageChange(e, index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </a>
            )
          )}
          {currentPage < Math.ceil(filteredItems.length / itemsPerPage) && (
            <a href="#" onClick={(e) => handlePageChange(e, currentPage + 1)}>
              &gt;
            </a>
          )}
        </div>

        {/* 검색 필터 */}
        <div className="open_community_search">
          <select
            className="category_select"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="title">제목</option>
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
      </main>
      <Footer />
    </div>
  );
};

export default OpenCommunity;
