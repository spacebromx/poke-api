import { combineReducers } from 'redux'
import SearchResults from './SearchResultsReducer'
import pokemonDetails from './PokemonDetailsReducer'

export default combineReducers({
  searchResults: SearchResults,
  pokemonDetails
})
