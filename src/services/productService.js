import httpClient from './httpClient';

const productService = {
  getProducts: async ({ producListingBffEndpoint = '' }) => {
    try {
      return await httpClient.get(producListingBffEndpoint);
    } catch (error) {
      console.error('Error in getProducts:', error.message);
      throw new Error('Failed to fetch products. Please try again later.'); // Add user-friendly error message
    }
  },
};

export default productService;
