import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";

export const mainContext = React.createContext();
const INIT_STATE = {
  products: null,
  productEdit: null,
  phonesCountInCart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).phones.length
    : 0,
  cart: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_TO_EDIT":
      return { ...state, productEdit: action.payload };
    case "CLEAR_PRODUCT_EDIT":
      return { ...state, productEdit: null };
    case "ADD_AND_DELETE_PHONE_IN_CART":
      return { ...state, phonesCountInCart: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
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

  //cart
  const addEndDeletePhoneCart = (phone) => {
    try {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          phones: [],
          totalPrice: 0,
        };
      }
      let product = {
        phone: phone,
        count: 1,
        subPrice: 0,
      };
      product.subPrice = calcSubPrice(product);
      let checkArr = cart.phones.filter((item) => {
        return item.phone.id === phone.id;
      });
      if (checkArr.length === 0) {
        cart.phones.push(product);
      } else {
        cart.phones = cart.phones.filter((item) => {
          return item.phone.id !== phone.id;
        });
      }
      cart.totalPrice = calcTotalPrice(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      let action = {
        type: "ADD_AND_DELETE_PHONE_IN_CART",
        payload: cart.phones.length,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const checkPhoneInCart = (id) => {
    try {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          phones: [],
          totalPrice: 0,
        };
      }
      let checkArr = cart.phones.filter((item) => {
        return item.phone.id === id;
      });
      if (checkArr.length === 0) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  };

  //
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        phones: [],
        totalPrice: 0,
      };
    }
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountPhone = (count, id) => {
    if (count < 1) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.phones = cart.phones.map((item) => {
      if (item.phone.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };
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
        addEndDeletePhoneCart,
        checkPhoneInCart,
        getCart,
        changeCountPhone,
        //
        products: state.products,
        productEdit: state.productEdit,

        //
        totalPosts: totalPosts,
        currentPosts: currentPosts,
        postsPerPage: postsPerPage,
        currentPage: currentPage,
        phonesCountInCart: state.phonesCountInCart,
        cart: state.cart,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
