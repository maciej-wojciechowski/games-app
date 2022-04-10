import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchGames } from "../actions/gamesActions";

// Components
import Filter from "./Filter";
import { motion } from "framer-motion";
import { debounce } from "lodash";

const initialFilters = {
  textInput: "",
  metacritic: 0,
  dateFrom: null,
  dateTo: null,
  genreId: 0,
  platforms: "",
};

const Nav = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initialFilters);
  const debouncedSearch = useRef(
    debounce((newFilters) => dispatchSearchGames(newFilters), 600)
  );
  function onFiltersChange(input, type) {
    console.log(input, type);

    switch (type) {
      case "text":
        setFilters((prev) => ({
          ...prev,
          textInput: input.target.value,
        }));
        break;
      case "metacritic":
        setFilters((prev) => ({
          ...prev,
          metacritic: input,
        }));
        break;
      case "dateFrom":
        setFilters((prev) => ({
          ...prev,
          dateFrom: input ? input.format("YYYY-MM-DD") : null,
        }));
        break;
      case "dateTo":
        setFilters((prev) => ({
          ...prev,
          dateTo: input ? input.format("YYYY-MM-DD") : null,
        }));
        break;
      case "genreId":
        setFilters((prev) => ({
          ...prev,
          genreId: input,
        }));
        break;
      case "platforms":
        setFilters((prev) => ({
          ...prev,
          platforms: input,
        }));
        break;
      default:
        break;
    }
  }

  function dispatchSearchGames(newFilters) {
    console.log("disp");
    console.log(newFilters);
    dispatch(searchGames(newFilters));
  }

  function searchHandler(e) {
    e?.preventDefault();
    console.log(filters);
    dispatch(searchGames(filters));
  }

  useEffect(() => {
    debouncedSearch.current(filters);
  }, [filters, filters.genreId]);

  return (
    <StyledNav>
      <Logo>
        <i className="fas fa-gamepad fa-4x"></i>
        <h1>Game App</h1>
      </Logo>
      <form className="search">
        <input
          type="text"
          value={filters.text}
          onChange={(e) => onFiltersChange(e, "text")}
        />
        <button type="submit" onClick={searchHandler}>
          <i className="fas fa-search fa-2x"></i>
        </button>
      </form>
      <StyledFilters>
        <Filter filters={filters} onFiltersChange={onFiltersChange} />
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
