import axios from "axios";

const baseUrl = "https://api.rawg.io/api/";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: { key: process.env.REACT_APP_API_KEY },
});

//getting current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popularGames = `games?dates=${lastYear},${currentDate}&ordering-rating&page_size=5`;

//Searched game
export const searchGameURL = (searchInput) => {
  let {
    textInput,
    sliderInput,
    dateFromInput,
    dateToInput,
    inputGenreId,
    inputPlatforms,
  } = searchInput;
  let [game_name, meta, dateFrom, dateTo, genre_id, platforms] = [
    textInput,
    sliderInput,
    dateFromInput,
    dateToInput,
    inputGenreId,
    inputPlatforms,
  ];
  return `games?search=${game_name}${meta ? `&metacritic=${meta},100` : ""}${
    dateFrom && dateTo ? `&dates=${dateFrom},${dateTo}` : ""
  }${genre_id ? `&genres=${genre_id}` : ""}${
    platforms ? `&platforms=${platforms.toString()}` : ""
  }&page_size=25`;
};

export const genresURL = "genres";

export const gameDetailURL = (id) => `games/${id}`;
export const gameScreenshotURL = (game_id) => `games/${game_id}/screenshots`;
