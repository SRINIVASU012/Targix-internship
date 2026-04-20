import { useReducer, useEffect } from "react";
import { ProductContext } from "./ProductContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { products: [] });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: data.products,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
