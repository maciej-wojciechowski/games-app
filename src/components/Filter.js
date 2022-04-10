import React, { PureComponent, useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  transform,
} from "framer-motion";
import styled from "styled-components";

import { DatePicker, Slider, Select, Checkbox } from "antd";
import { useSelector } from "react-redux";
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

const Filter = ({ filters, onFiltersChange }) => {
  const [toggle, setToggle] = useState(false);

  const { genres } = useSelector((state) => state.games);

  return (
    <StyledFilter>
      <div className="filter-head">
        <h2 onClick={() => setToggle(!toggle)}>
          Filters
          <i className={`fas fa-chevron-${toggle ? "up" : "down"}`}></i>
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
                value={filters.metacritic}
                onChange={(e) => onFiltersChange(e, "metacritic")}
              />
              <span>{filters.metacritic}</span>
            </Container>
            <Container>
              <h4>Release</h4>
              <div className="date-container">
                <label htmlFor="from-date">From</label>
                <DatePicker
                  name="from-date"
                  onChange={(e) => onFiltersChange(e, "dateFrom")}
                />
              </div>
              <br />
              <div className="date-container">
                <label htmlFor="to-date">To</label>
                <DatePicker
                  name="to-date"
                  onChange={(e) => onFiltersChange(e, "dateTo")}
                />
              </div>
            </Container>
            <Container>
              <h4>Genre</h4>
              <Select
                style={{ width: "200px" }}
                id="select-genre"
                value={filters.genre}
                onChange={(e) => onFiltersChange(e, "genreId")}>
                <Option value={0}>All</Option>
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
                  onChange={(e) => onFiltersChange(e, "platforms")}
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
