import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const GameDetail = () => {
  const history = useHistory();
  //Exit
  const exitDetailHandler = (e) => {
    const target = e.target;
    if (target.classList.contains("container")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <DetailContainer className="container" onClick={exitDetailHandler}>
          <DetailCard>
            <h2>{game.name}</h2>
            <h3>{game.rating}</h3>
            {game.platforms.map((platform) => (
              <h4>{platform.platform.name}</h4>
            ))}
            <div>
              <h3>Description</h3>
              <p> {game.description_raw}</p>
            </div>
            {screenshots.map((screen) => {
              return <img src={screen.image}></img>;
            })}
          </DetailCard>
        </DetailContainer>
      )}
    </>
  );
};

const DetailContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
  left: 0;
  padding: 3rem 0;
  img {
    width: 100%;
  }
`;

const DetailCard = styled(motion.div)`
  width: 80%;
  margin: auto;
  background: white;
  padding: 1rem;
`;

export default GameDetail;
