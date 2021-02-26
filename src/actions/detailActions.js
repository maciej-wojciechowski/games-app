import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";

export const loadDetailGame = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  // FETCH AXIOS
  const detailData = await axios.get(gameDetailURL(id));
  const screeshotsData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screeshotsData.data.results,
    },
  });
};
