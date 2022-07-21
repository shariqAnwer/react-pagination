import React from "react";

const Pagination = ({
  totalPages,
  handleClick,
  handleNext,
  handlePrev,
  page,
}) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  //   console.log("pages:", pages);

  return (
    <div>
      <button disabled={page < 2} onClick={handlePrev}>
        prev
      </button>
      {pages.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
      <button disabled={page > 9} onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default Pagination;
