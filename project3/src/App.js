import {MainPage, Movies, TvSeries, Search} from "./pages";
import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvseries" element={<TvSeries />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
