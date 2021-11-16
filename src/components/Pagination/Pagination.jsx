import React, { useContext } from "react";
import { mainContext } from "../../contexts/MainContext";

const Pagination = () => {
  const { totalPosts, postsPerPage, handlePage, currentPage } =
    React.useContext(mainContext);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <>
      <div className="pagination">
        <ul>
          {pageNumbers.map((item) => (
            <li key={item}>
              <button
                style={{
                  background: item === currentPage ? "lightgrey" : "grey",
                }}
                onClick={() => handlePage(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
