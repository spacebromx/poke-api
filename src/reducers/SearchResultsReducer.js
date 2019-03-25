const initialState = {
    searchResults: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POKEMONS":
            return {
                ...state,
                searchResults: [
                    ...state.searchResults,
                    ...action.payload
                ]
            }

        default:
            return state;
    }
};