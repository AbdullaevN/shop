import React, { useContext, useEffect } from "react";
import AddedCard from "../components/AddedCard/AddedCard";
import MyPagination from "../components/Pagination/Pagination";
import Pagination from "../components/Pagination/Pagination";
import { mainContext } from "../contexts/MainContext";

const CatalogPage = () => {
  const { products, getProducts } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products ? (
        products.length ? (
          //
          <>
            <AddedCard />
            <MyPagination />
          </>
        ) : (
          <div className="empty">
            <h2>Товаров нет</h2>
          </div>
        )
      ) : (
        <h2>Loading...</h2>
      )}{" "}
    </div>
  );
};

export default CatalogPage;
