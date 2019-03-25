const FETCH_POKEMONS = "FETCH_POKEMONS";
const RESET_SEARCH_RESULTS = "RESET_SEARCH_RESULTS";

const initialState = {
  searchResults: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload]
      };

    case RESET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: []
      };

    default:
      return state;
  }
}

export const fetchAllPokemons = () => async dispatch => {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const response = await request.json();

  dispatch({
    type: FETCH_POKEMONS,
    payload: response.results
  });
};

export const resetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS
});
