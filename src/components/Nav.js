import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchGames } from "../actions/gamesActions";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [sliderInput, setSliderInput] = useState(0);

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(textInput, sliderInput));
    setTextInput("");
  };

  // Slider
  const sliderHandler = (e) => {
    setSliderInput(e.target.value);
  };

  return (
    <StyledNav>
      <h1>Game App</h1>
      <form className="search">
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type="submit" onClick={searchHandler}>
          Search
        </button>
      </form>
      <StyledFilters>
        <SliderContainer>
          <label htmlFor="metaCriticSlider">Metacritic:</label>
          <input
            name="metaCriticSlider"
            type="range"
            min="1"
            max="100"
            value={sliderInput}
            onChange={sliderHandler}
          />
        </SliderContainer>
        <span>{sliderInput}</span>
      </StyledFilters>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 8rem;
  h1 {
    margin: 1rem;
  }
`;
const StyledFilters = styled.div`
  display: flex;

  width: 100%;
`;
const SliderContainer = styled.div`
  width: 30%;
  input {
    width: 100%;
  }
`;

export default Nav;
