import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MainNav.scss";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  // useEffect(()=> {
  //     if(value === 0) {
  //       navigate("/");
  //     } else if (value === 1) {
  //       navigate("movies");
  //     } else if (value === 2) {
  //       navigate("tvseries");
  //     } else if (value === 3) {
  //       navigate("search");
  //     }
  // }, [value, navigate])
  return (
    <Box sx={{ width: 500, zIndex: 20, height: 75 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          value="/"
          onClick={() => navigate("/")}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          value="/movies"
          onClick={() => navigate("/movies")}
          label="Movies"
          icon={<LocalMoviesIcon />}
        />
        <BottomNavigationAction
          value="/tvseries"
          onClick={() => navigate("/tvseries")}
          label="TV Series"
          icon={<PersonalVideoIcon />}
        />
        <BottomNavigationAction
          value="/search"
          onClick={() => navigate("/search")}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
