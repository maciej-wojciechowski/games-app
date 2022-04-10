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
    metacritic,
    dateFrom,
    dateTo,
    genreId,
    platforms,
  } = searchInput;

  console.log(genreId)

  console.log(`games?search=${textInput}${metacritic ? `&metacritic=${metacritic},100` : ""}${
    dateFrom && dateTo ? `&dates=${dateFrom},${dateTo}` : ""
  }${genreId ? `&genres=${genreId}` : ""}${
    platforms ? `&platforms=${platforms.toString()}` : ""
  }&page_size=25`)
 
  return `games?search=${textInput}${metacritic ? `&metacritic=${metacritic},100` : ""}${
    dateFrom && dateTo ? `&dates=${dateFrom},${dateTo}` : ""
  }${genreId ? `&genres=${genreId}` : ""}${
    platforms ? `&platforms=${platforms.toString()}` : ""
  }&page_size=25`;
};

export const genresURL = "genres";

export const gameDetailURL = (id) => `games/${id}`;
export const gameScreenshotURL = (game_id) => `games/${game_id}/screenshots`;
