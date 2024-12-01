import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';

import './index.scss';
import { ProductListingContextProvider } from './store/product-listing-context';
import ProductListContainer from './components/ProductListing/ProductListingContainer';

const App = ({ config }) => {
  return (
    <ProductListingContextProvider>
      <h1>Product Listing</h1>
      <ProductListContainer config={config} />
    </ProductListingContextProvider>
  );
};
App.propTypes = {
  config: PropTypes.object.isRequired,
};
App.propTypes = {};

let rootElement = null;

function ProductListingAppInit(ele, config) {
  if (ele !== undefined && ele !== null) {
    if (rootElement === null) {
      rootElement = createRoot(ele);
    }
    rootElement.render(<App config={config} />);
  }
}

if (document.querySelector('#__product_listing__microapp__dev__only')) {
  const config = {
    producListingBffEndpoint: 'https://products-bff.onrender.com/get-products',
  };
  ProductListingAppInit(
    document.getElementById('__product_listing__microapp__dev__only'),
    config
  );
}

export default ProductListingAppInit;
