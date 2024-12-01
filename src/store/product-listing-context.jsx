import { useState, useMemo, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const defaultState = {};
const ProductListingContext = createContext(defaultState);

export const ProductListingContextProvider = ({ children }) => {
  const [productListingApiData, setProductListingApiData] = useState(null);

  const updateProductListingApiData = (apiData) => {
    setProductListingApiData(apiData);
  };

  const storeData = useMemo(
    () => ({
      productListingApiData,
      updateProductListingApiData,
    }),
    [productListingApiData, updateProductListingApiData],
  );

  return (
    <ProductListingContext.Provider value={storeData}>
      {children}
    </ProductListingContext.Provider>
  );
};
export function useProductListingContext() {
  const context = useContext(ProductListingContext);
  if (context === undefined) {
    throw new Error(
      'ProductListingContext is used outside the context provider',
    );
  }
  return context;
}

ProductListingContextProvider.propTypes = {
  children: PropTypes.any,
};
export default ProductListingContext;
