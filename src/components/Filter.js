import React, { PureComponent, useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  transform,
} from "framer-motion";
import styled from "styled-components";

import { DatePicker, Slider, Select, Checkbox } from "antd";
const { Option } = Select;

// Platforms checkbox

const platformsArr = [
  { label: "PC", value: "4" },
  { label: "PS3", value: "16" },
  { label: "PS4", value: "18" },
  { label: "PS5", value: "187" },
  { label: "Xbox 360", value: "14" },
  { label: "Xbox One", value: "1" },
];

const Filter = ({
  genres,
  sliderInput,
  setSliderInput,
  setDateFromInput,
  setDateToInput,
  inputGenreId,
  setInputGenreId,
  inputPlatforms,
  setInputPlatforms,
}) => {
  // Toglle
  const [toggle, setToggle] = useState(false);
  // Filters input handlers
  const sliderHandler = (e) => {};
  const dateFromHandler = (value) => {
    return value ? setDateFromInput(value.format("YYYY-MM-DD")) : [];
  };
  const dateToHandler = (value) => {
    return value ? setDateToInput(value.format("YYYY-MM-DD")) : [];
  };
  const genreIdHandler = (value) => {
    setInputGenreId(value);
  };
  const platformsHandler = (target) => {
    return target.length ? setInputPlatforms(target) : setInputPlatforms("");
  };

  return (
    <StyledFilter>
      <div className="filter-head">
        <h2 onClick={() => setToggle(!toggle)}>
          Filters
          {toggle ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </h2>
      </div>
      <AnimatePresence>
        {toggle ? (
          <motion.div
            className="main-container"
            initial={{ opacity: 0, height: "0" }}
            animate={{ opacity: 1, height: "100%" }}
            exit={{ opacity: 0, height: "0" }}>
            <Container>
              <h4>Metacritic</h4>
              <Slider
                name="metaCriticSlider"
                onChange={(e) => setSliderInput(e)}
              />
              <span>{sliderInput}</span>
            </Container>
            <Container>
              <h4>Release</h4>
              <div className="date-container">
                <label htmlFor="from-date">From</label>
                <DatePicker name="from-date" onChange={dateFromHandler} />
              </div>
              <br />
              <div className="date-container">
                <label htmlFor="to-date">To</label>
                <DatePicker name="to-date" onChange={dateToHandler} />
              </div>
            </Container>
            <Container>
              <h4>Genre</h4>
              <Select
                style={{ width: "200px" }}
                id="select-genre"
                value={inputGenreId}
                onChange={genreIdHandler}>
                <Option value="">All</Option>
                {genres.map((genre) => (
                  <Option key={genre.id} value={genre.id}>
                    {genre.name}
                  </Option>
                ))}
              </Select>
            </Container>
            <Container>
              <h4>Platforms</h4>
              <div>
                <Checkbox.Group
                  className="platforms-container"
                  options={platformsArr}
                  // defaultValue={["4"]}
                  onChange={platformsHandler}
                />
              </div>
            </Container>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </StyledFilter>
  );
};

const StyledFilter = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    width: auto;
    margin: auto;
    cursor: pointer;
    i {
      padding-left: 0.5rem;
    }
  }
  .main-container {
    display: flex;
    width: 90%;
  }

  @media (max-width: 500px) {
    .main-container {
      flex-direction: column;
    }
  }
`;
const Container = styled(motion.div)`
  margin: 0.5rem;
  width: 100%;
  input {
    width: 100%;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
  .date-container {
    margin-right: 2rem;
    display: flex;
    justify-content: flex-end;
    label {
      margin-right: 0.5rem;
    }
    @media (max-width: 500px) {
      justify-content: center;
    }
  }
`;

export default Filter;
