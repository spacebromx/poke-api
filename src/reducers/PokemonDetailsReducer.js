export default (state = { pokemonDetails: [] }, action) => {
  switch (action.type) {
    case "FETCH_POKEMON_DETAIL":
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
};
