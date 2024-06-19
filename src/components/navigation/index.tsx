import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "../../pages/movieDetail";
import { Home } from "../../pages/home";
import { GlobalDataType } from "types/globalContext";
import { GlobalContext } from "context/GlobalContext";
import FavoriteMovies from "../../pages/favoriteMovies/FavoriteMovies";

const Navigation = () => {
  const [globalData, setGlobalData] = useState<GlobalDataType>({
    filters: {},
  } as GlobalDataType);

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/favorite" element={<FavoriteMovies />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};

export default Navigation;
