import React from "react";
import styled from "styled-components";

const Game = ({ name, id, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  width: 20rem;
  height: 15rem;
  margin: 0 0.5rem;
  background: white;
  position: relative;
  overflow: hidden;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    bottom: -10%;
    right: -25%;
  }
`;

export default Game;
