import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchGames } from "../actions/gamesActions";

// Components
import Filter from "./Filter";
import { motion } from "framer-motion";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [sliderInput, setSliderInput] = useState(0);
  const [dateFromInput, setDateFromInput] = useState(null);
  const [dateToInput, setDateToInput] = useState(null);
  const [inputGenreId, setInputGenreId] = useState("");
  const [inputPlatforms, setInputPlatforms] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let searchInput = {
      textInput,
      sliderInput,
      dateFromInput,
      dateToInput,
      inputGenreId,
      inputPlatforms,
    };
    dispatch(searchGames(searchInput));
    setTextInput("");
  };

  const { genres } = useSelector((state) => state.games);

  return (
    <StyledNav>
      <Logo>
        <i className="fas fa-gamepad fa-4x"></i>
        <h1>Game App</h1>
      </Logo>
      <form className="search">
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type="submit" onClick={searchHandler}>
          <i className="fas fa-search fa-2x"></i>
        </button>
      </form>
      <StyledFilters>
        <Filter
          genres={genres}
          sliderInput={sliderInput}
          setSliderInput={setSliderInput}
          dateFromInput={dateFromInput}
          setDateFromInput={setDateFromInput}
          setDateToInput={setDateToInput}
          inputGenreId={inputGenreId}
          setInputGenreId={setInputGenreId}
          inputPlatforms={inputPlatforms}
          setInputPlatforms={setInputPlatforms}
        />
      </StyledFilters>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  h1 {
    margin: 0;
    margin-top: 2rem;
    margin-left: 1rem;
    font-family: "Permanent Marker", cursive;
  }
  img {
    width: 2rem;
    color: white;
  }
  form {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      height: 3rem;
      width: 50%;
      border: none;
      font-size: 1.5rem;
      padding: 0.3rem;
    }
    button {
      border: none;
      background: rgba(255, 255, 255, 0.5);
      height: 3rem;
      width: 3rem;
      cursor: pointer;
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  i {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
    i {
      font-size: 2rem;
    }
  }
`;
const StyledFilters = styled(motion.div)`
  width: 100%;
`;

export default Nav;
