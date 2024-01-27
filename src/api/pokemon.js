import { API, handleApiError } from './utils';

export const getPokemon = async (search) => {
  try {
    const { data } = await API.get(`/pokemon/${search}/`);
    return { error: null, data };
  } catch (err) {
    return handleApiError(err);
  }
};

export const getColor = async (search) => {
  try {
    const { data } = await API.get(`/pokemon-color/${search}/`);
    return { error: null, data };
  } catch (err) {
    handleApiError(err);
  }
}
