import { API, handleApiError, axiosInstance } from './utils';

export const getPokemon = async (search) => {
  try {
    const { data } = await API.get(`/pokemon/${search.toLowerCase()}/`);
    return { error: null, data };
  } catch (err) {
    return handleApiError(err);
  }
};

export const getColor = async (specieUrl) => {
  try {
    const { data } = await axiosInstance.get(specieUrl);
    return { error: null, data };
  } catch (err) {
    return handleApiError(err);
  }
};
