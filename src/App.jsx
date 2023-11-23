import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './components/Movies.jsx';
import Error404 from './components/Error404.jsx';
import TvShows from './components/TvShows.jsx';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';

import Layout from "./layouts/Layout.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import MovieDetails from "./components/MovieDetails.jsx";
import TvShowDetails from "./components/TvShowDetails.jsx";

export default  function App ()  {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/tvshows"  element={<TvShows />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/movies/details/:id" element={<MovieDetails />} />
              <Route path="/tvshow/details/:id" element={<TvShowDetails />} />
              <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    
  
  );
}


