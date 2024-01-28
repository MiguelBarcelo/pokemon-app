import { useContext } from "react";
import PokemonContext from "../Context/PokemonContext";

export default function usePokemonContext() {
  return useContext(PokemonContext);
}
