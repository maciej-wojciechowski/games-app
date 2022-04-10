import axios from "axios";
import { popularGamesURL, searchGameURL, genresURL, axiosInstance, popular_games } from "../api";

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axiosInstance.get(popular_games);
  const genresData = await axiosInstance.get(genresURL);
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
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched: searchData.data.results,
    },
  });
};
