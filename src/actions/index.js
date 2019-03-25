import {
  FETCH_POKEMONS,
  RESET_SEARCH_RESULTS,
  FETCH_POKEMON_DETAIL
} from "../constants";

export const fetchAllPokemons = () => async dispatch => {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const response = await request.json();

  dispatch({
    type: FETCH_POKEMONS,
    payload: response.results
  });
};

export const fetchPokemonDetails = id => async dispatch => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const response = await request.json();

  dispatch({
    type: FETCH_POKEMON_DETAIL,
    payload: response
  });
};

export const resetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS
});
