import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadGames } from "../actions/gamesActions";
//Components
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames(), [dispatch]);
  });
  const { popular, searched } = useSelector((state) => state.games);
  return (
    <div>
      {searched.length ? (
        <GameSection>
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
        </GameSection>
      ) : (
        <GameSection>
          <h2>Popular Games</h2>
          <GameList>
            {popular.map((game) => (
              <Game
                name={game.name}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </GameList>
        </GameSection>
      )}
    </div>
  );
};

const GameList = styled.div`
  display: flex;
`;
const GameSection = styled.div``;

export default Home;
