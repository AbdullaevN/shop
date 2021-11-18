import React, { useContext } from "react";
import { mainContext } from "../../contexts/MainContext";
import { Button } from "react-bootstrap";

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
