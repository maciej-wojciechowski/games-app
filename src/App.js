import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./actions/gamesActions";
// Global style
import GlobalStyles from "./components/GlobalStyles";
// Components
import Nav from "./components/Nav";
import Home from "./pages/Home";
//Antd styles
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
