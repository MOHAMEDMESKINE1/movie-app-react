import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./layouts/Layout.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Movies from "./components/movies/Movies.jsx";
import MovieDetails from "./components/movies/MovieDetails.jsx";

import TvShows from "./components/tvshwos/TvShows.jsx";
import TvShowDetails from "./components/tvshwos/TvShowDetails.jsx";
import Home from "./components/Home.jsx";
import Blog from "./components/blog/Blog.jsx";
import Error404 from "./components/Error404.jsx";
import BookDetails from "./components/books/BookDetails.jsx";
import Books from "./components/books/Books.jsx";

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
              <Route path="/tvshow/details/:id" element={<TvShowDetails />} />

              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/details/:id" element={<MovieDetails />} />

              {/* <Route path="/books" element={<Books />} />
              <Route path="/books/details/:id" element={<BookDetails />} /> */}

              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    
  
  );
}


