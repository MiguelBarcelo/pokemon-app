import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const API = axios.create({
  baseURL: BASE_URL
});

export const handleApiError = async (error) => {
  try {
    const errorMessage =
      error.response?.data?.message || "An unexpected error ocurred";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error ocurred");
  }
};
