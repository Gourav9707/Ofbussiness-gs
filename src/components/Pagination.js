import React from "react";
import "./Pagination.scss";

const Pagination = ({ issuePerPage, totalIssues, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalIssues / issuePerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            ></li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
