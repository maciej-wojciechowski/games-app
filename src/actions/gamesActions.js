import axios from "axios";
import { popularGamesURL, searchGameURL } from "../api";

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
export const searchGames = (input, meta) => async (dispatch) => {
  // FETCH AXIOS
  const searchData = await axios.get(searchGameURL(input, meta));
  console.log(searchGameURL(input, meta));
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched: searchData.data.results,
    },
  });
};
