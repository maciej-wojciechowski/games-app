import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadGames } from "../actions/gamesActions";
import { useLocation } from "react-router-dom";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  //location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  const { popular, searched } = useSelector((state) => state.games);
  return (
    <motion.div>
      {pathId && <GameDetail />}
      <GameSection>
        {searched.length ? (
          <>
            <h2>Searched Games</h2>
            <GameList>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </GameList>
          </>
        ) : (
          ""
        )}
      </GameSection>
      <GamesTop>
        <h2>Top 5 rated</h2>
        <GameTopList>
          {popular.map((game) => (
            <Game
              name={game.name}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </GameTopList>
      </GamesTop>
    </motion.div>
  );
};

const GameTopList = styled(motion.div)`
  display: flex;
  div {
    margin: 0 0.5rem;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
  }
`;
const GamesTop = styled(motion.div)`
  margin: auto 1rem;
  h2 {
    margin: 1rem;
  }
`;

const GameList = styled(motion.div)`
  margin: 0 auto;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  align-items: start;
`;
const GameSection = styled(motion.div)`
  h2 {
    padding-left: 1rem;
  }
`;

export default Home;
