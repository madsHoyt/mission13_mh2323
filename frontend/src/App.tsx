import "./App.css";
import Nav from "./Navigation";
import Home from "./Home";
import Podcasts from "./Podcasts";
import MovieCollection from "./MovieCollection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/movies" element={<MovieCollection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
