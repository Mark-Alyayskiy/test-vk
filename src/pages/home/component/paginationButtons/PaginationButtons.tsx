import React, { FC } from "react";
import { PaginationButtonsProps } from "./types";
import "./PaginationButtons.css";

const PaginationButtons: FC<PaginationButtonsProps> = ({
  handlePrevPage,
  handleNextPage,
  currentPage,
  visiblePages,
  totalPages,
  handlePageClick,
}) => {
  return (
    <div className="pagination">
      <button
        className="paginationButton"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={currentPage === page ? "activePage" : "page"}
        >
          {page}
        </button>
      ))}
      <button
        className="paginationButton"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
