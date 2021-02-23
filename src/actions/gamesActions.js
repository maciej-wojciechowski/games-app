import axios from "axios";
import { popularGamesURL, searchGameURL, genresURL } from "../api";

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const genresData = await axios.get(genresURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      genres: genresData.data.results,
    },
  });
};
export const searchGames = (searchInput) => async (dispatch) => {
  // FETCH AXIOS
  const searchData = await axios.get(searchGameURL(searchInput));
  // console.log(searchInput);
  // console.log(searchGameURL(searchInput));
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched: searchData.data.results,
    },
  });
};
