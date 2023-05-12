import { createContext, useState } from "react";

export const ProductContext = createContext({ products: [] });

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;