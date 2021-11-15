import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const mainContext = React.createContext();
const INIT_STATE = {
  products: null,
  productEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_TO_EDIT":
      return { ...state, productEdit: action.payload };
    case "CLEAR_PRODUCT_EDIT":
      return { ...state, productEdit: null };
    default:
      return state;
  }
};
const MainContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    try {
      let filter = window.location.search;
      const response = await axios(`${API}${filter}`);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };
  const createProduct = async (product) => {
    try {
      const response = await axios.post(API, product);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };
  //edit

  const getProductsEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCTS_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const clearProductEdit = () => {
    dispatch({
      type: "CLEAR_PRODUCT_EDIT",
    });
  };

  const saveGetProductsEdit = async (editedProduct) => {
    try {
      const response = await axios.patch(
        `${API}/${editedProduct.id}`,
        editedProduct
      );
      console.log(response);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  //Пагинация
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    if (state.products) {
      const data = state.products;
      setPosts(data);
    }
  }, [state.products]);

  const numberOfLastPost = currentPage * postsPerPage;
  const numberOfFirstPost = numberOfLastPost - postsPerPage;
  const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost);
  const totalPosts = posts.length;
  //

  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };

  function resetCurrentPage() {
    setCurrentPage(1);
  }
  return (
    <mainContext.Provider
      value={{
        getProducts: getProducts,
        clearProductEdit,
        createProduct,
        deleteProduct,
        getProductsEdit,
        saveGetProductsEdit,
        //
        handlePage,
        //
        products: state.products,
        productEdit: state.productEdit,

        //
        totalPosts: totalPosts,
        currentPosts: currentPosts,
        postsPerPage: postsPerPage,
        currentPage: currentPage,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
