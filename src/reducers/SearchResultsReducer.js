import { FETCH_POKEMONS, RESET_SEARCH_RESULTS } from "../constants";

const initialState = {
  searchResults: []
};

export default (state = initialState, action) => {
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
};
