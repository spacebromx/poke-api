// Constants
const FETCH_POKEMON_DETAIL = "FETCH_POKEMON_DETAIL";

// Reducer
export default function reducer(state = { pokemonDetails: [] }, action) {
  switch (action.type) {
    case FETCH_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetails: {
          ...state.pokemonDetails,
          ...action.payload
        }
      };

    default:
      return state;
  }
}

// Actions

export const fetchPokemonDetails = id => async dispatch => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const response = await request.json();

  dispatch({
    type: FETCH_POKEMON_DETAIL,
    payload: response
  });
};
