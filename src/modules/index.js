/**
 * Rather than having a tuple of <actionTypes, reducer, actionCreator>, the redux ducks proposal
 * encourages modularity and shareability of those items by having them sorted in its own bundle,
 * or module, or duck. Constants, action creators and reducers live in the same module, so they
 * make more sense and are easier to manage.
 */

import { combineReducers } from "redux";
import SearchResults from "./searchResults";
import pokemonDetails from "./pokemonDetail";

export default combineReducers({
  searchResults: SearchResults,
  pokemonDetails
});
