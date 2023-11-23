import axios from "axios";

export const useFetch = async (url) => {

    try {
       const response = await axios.get(url);
      return  response.data.results || [];
       
    } catch (error) {
       console.error('Error fetching movies:', error);
       throw error;
    }
   };

export default useFetch;