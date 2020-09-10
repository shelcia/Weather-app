import React from "react";

const Pagination = ({
  perPage,
  totalPosts,
  Paginate,
  changePage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }
  const active = (number) => {
    if (number === currentPage) return "active";
  };
  const disabled = (num) => {
    if (currentPage === 1 && num === 0) return "disabled";
    else if (currentPage === Math.ceil(totalPosts / perPage) && num === 1)
      return "disabled";
  };
  return (
    <div className="pagination">
      <li>
        <a className={disabled(0)} onClick={() => changePage(0)} href="!#">
          Prev
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a
            className={active(number)}
            onClick={() => Paginate(number)}
            href="#!"
          >
            {number}
          </a>
        </li>
      ))}
      <li>
        <a className={disabled(1)} onClick={() => changePage(1)} href="!#">
          Next
        </a>
      </li>
    </div>
  );
};

export default Pagination;
