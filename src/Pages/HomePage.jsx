import React, { useContext, useEffect } from "react";
import AddedCard from "../components/AddedCard/AddedCard";
import CarouselComp from "../components/Carousel/CarouselComp";
import { mainContext } from "../contexts/MainContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SectionOne from "../components/SectionOne/SectionOne";
import SectionTwo from "../components/SectionTwo/SectionTwo";

const HomePage = () => {
  const { products, getProducts } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <CarouselComp />
      <SectionOne />
      <SectionTwo />
      {products ? (
        products.length ? (
          //
          <AddedCard />
        ) : (
          <h2>Товаров нет</h2>
        )
      ) : (
        <h2>Loading...</h2>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
