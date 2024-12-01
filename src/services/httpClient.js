const defaultHeaders = {
  'Content-Type': 'application/json',
};

const httpClient = {
  get: async (url, options = {}) => {
    try {
      const response = await fetch(url, { ...options, headers: { ...defaultHeaders, ...options.headers } });
      if (!response.ok) {
        // Add additional context to the error
        throw new Error(`GET ${url} failed with status ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error('HTTP GET Error:', error.message); // Log error for debugging
      throw error; // Rethrow for higher-level handling
    }
  },
  post: async (url, data, options = {}) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { ...defaultHeaders, ...options.headers },
      });
      if (!response.ok) {
        throw new Error(`POST ${url} failed with status ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error('HTTP POST Error:', error.message);
      throw error;
    }
  },
};
export default httpClient;
