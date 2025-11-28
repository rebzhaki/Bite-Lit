import { Pagination } from "react-bootstrap";
import "./pagination.css";
const PaginationContent = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <Pagination className="justify-content-center my-4">
      <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
      {pages.map((page) => (
        <Pagination.Item key={page} active={page === currentPage} onClick={() => onPageChange(page)}>{page} </Pagination.Item>
      ))}
      <Pagination.Next disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationContent;
