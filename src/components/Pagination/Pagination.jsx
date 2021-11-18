import React, { useContext } from "react";
import { mainContext } from "../../contexts/MainContext";
import { Button } from "react-bootstrap";

const Pagination = () => {
  const { totalPosts, postsPerPage, handlePage, currentPage } =
    React.useContext(mainContext);
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  const pageNumbers = [1];
  if (currentPage === 1) {
    pageNumbers.push(2, 3, 4, Math.ceil(totalPosts / postsPerPage));
  } else if (
    currentPage === Math.ceil(totalPosts / postsPerPage) ||
    currentPage === Math.ceil(totalPosts / postsPerPage) - 1
  ) {
    pageNumbers.push(
      Math.ceil(totalPosts / postsPerPage) - 3,
      Math.ceil(totalPosts / postsPerPage) - 2,
      Math.ceil(totalPosts / postsPerPage) - 1,
      Math.ceil(totalPosts / postsPerPage)
    );
  } else if (currentPage === 2) {
    pageNumbers.push(2, 3, 4, Math.ceil(totalPosts / postsPerPage));
  } else {
    pageNumbers.push(
      currentPage - 1,
      currentPage,
      currentPage + 1,
      Math.ceil(totalPosts / postsPerPage)
    );
  }

  console.log(postsPerPage);
  console.log(totalPosts);

  return (
    <>
      <div className="pagination">
        <ul>
          {pageNumbers.map((item) => (
            <li key={item}>
              <Button
                style={{
                  background: item === currentPage ? "blue" : " lightblue",
                  margin: "5px",
                }}
                variant="contained"
                onClick={() => handlePage(item)}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
