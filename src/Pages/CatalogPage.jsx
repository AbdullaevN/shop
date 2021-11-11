import React, { useContext, useEffect } from "react";
import AddedCard from "../components/AddedCard/AddedCard";
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
          <AddedCard />
        ) : (
          <h2>Товаров нет</h2>
        )
      ) : (
        <h2>Loading...</h2>
      )}{" "}
    </div>
  );
};

export default CatalogPage;
