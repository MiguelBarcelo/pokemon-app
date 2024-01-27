import { useReducer } from 'react';
import initialState from './initialState';
import reducer from './reducer';
// Context
import { PokemonContext } from "./PokemonContext";

export default function PokemonProvider({ children }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch
  }
  return (
    <PokemonContext.Provider value={store}>
      { children }
    </PokemonContext.Provider>
  )
}
