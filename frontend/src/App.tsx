import "./App.css";
import Nav from "./Navigation";
import Home from "./Home";
import Podcasts from "./Podcasts";
import MovieCollection from "./movie/MovieCollection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* 
  Note: installed "react-router-dom" to do the navigation (npm install react-router-dom)
  Author: Madison Hoyt
  Description: an app that displays a list of movies and includes navigation to other pages
 */
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home saying="Home" />} />
        <Route path="/podcasts" element={<Podcasts saying="Podcasts" />} />
        <Route
          path="/movies"
          element={<MovieCollection saying="Movie Collection" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
