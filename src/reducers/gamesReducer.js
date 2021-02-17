const initState = {
  popular: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    case "SEARCH_GAMES":
      return { ...state, searched: action.payload.searched };
    default:
      return { ...state };
  }
};

export default gamesReducer;
