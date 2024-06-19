export type PaginationButtonsProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  visiblePages: number[];
  totalPages: number;
  handlePageClick: (page: number) => void;
};
