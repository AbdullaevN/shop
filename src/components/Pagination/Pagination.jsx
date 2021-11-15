import React from "react";
import "./Pagination.css";
import { Pagination } from "react-bootstrap";

const MyPagination = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <div className="pag-div">
        <div>
          <Pagination>{items}</Pagination>
        </div>
      </div>
    </>
  );
};

export default MyPagination;
