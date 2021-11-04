import React, { useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const mainContext = React.createContext();
const INIT_STATE = {
  products: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
  }
};
const MainContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    try {
      const response = await axios(API);
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
  return (
    <mainContext.Provider
      value={{
        getProducts: getProducts,
        createProduct,
        products: state.products,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
