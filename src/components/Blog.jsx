import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../customHooks/useFetch';
function Blog() {

    const [movies, setMovies] = useState([]);
    const [tvshwos, setTvShows] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const fetchAllMovies =async () =>{
        
        try {
            const allMovies = await useFetch('https://api.themoviedb.org/3/trending/movie/day?api_key=00357191f7f962b0db2d77089228f80d')
            setMovies(allMovies)


        } catch (error) {
            console.error('Error fetching movies:', error);

        }
    }
    const fetchTvShows =async () =>{
        try{
         
            const allTvshows = await useFetch('https://api.themoviedb.org/3/trending/tv/day?api_key=00357191f7f962b0db2d77089228f80d');
            setTvShows(allTvshows);
           
          
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }
    const fetchTopRated =async () =>{
        try{

            const TopRated = await useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=00357191f7f962b0db2d77089228f80d');
            setTopRated(TopRated);            
            
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
        }
      }

    useEffect(() => {

        fetchAllMovies()
        fetchTvShows()
        fetchTopRated()
    },[]);
    return (
        <div>
            <section className=" m-5">
                    <div className="container grid grid-cols-1 m-auto md:grid-cols-2    gap-1.5 py-3">
                        <div className="bg-white p-5 text-gray-900 ">
                            <div className="flex justify-start text-gray-800">
                                <Link to={"/"} className='mx-1' >Home / </Link>
                                <Link to={"/blog"} className='text-indigo-500'> Blog</Link>
                            </div>
                            <h1 className="text-gray-900 my-3 text-2xl ">TOP 3 TRENDINGS MOVIES </h1>
                            <hr className="bg-gray-50" />

                            {
                               movies&&  movies.slice(0,3).map(movie => (
                                    <div className="py-2 text-gray-800 ">
                                        <h1 className="text-gray-900 my-3 text-2xl ">{movie.original_title} </h1>
                                        <img class="max-h-72    w-full bg-white p-2 shadow-lg object-content my-4" src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}  alt="image description"/>
                                        <div className="my-4">
                                                <span className="mt-5 bg-blue-500  text-white p-1.5">{movie.media_type}</span>
                                                <h2 className="font-semibold mt-4 text-3xl">
                                                {movies.original_title}
                                                </h2>
                                                <small className="font-bold mt-3 ">Relased <span className=' ml-2 text-xs text-indigo-500 '>{movie.release_date}</span></small>
                                                <p className="mt-3 font-light">{movie.overview}</p>
                                                <span className="mt-5">
                                                    <FontAwesomeIcon icon={ faThumbsUp} className='text-indigo-700 font-semibold '/> {movie.vote_average}
                                                </span>
                                        </div>
                                    </div>
                                ))
                            }
                        
                            
                        </div>
                        <div className="bg-white  gap-1.5 text-gray-900 mt-6 p-5">
                            <h1 className="text-gray-900 my-3 text-2xl ">TOP RATED MOVIES </h1>

                            <hr className="bg-gray-50" />
                            {
                                topRated && topRated.slice(0,4).map(movie => (

                                    <div data-aos="zoom-out-left"  className="bg-white p-5  text-gray-900 ">

                                                <div className="container grid md:grid-cols-2    gap-1 py-1">

                                                    <img  src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} className=" shadow-md p-2 "/>
                                                    <div className="my-4 mx-2">
                                                        <p className="font-semibold mt-4 text-3xl">
                                                            {movie.original_title}
                                                        </p>
                                                        <small className="font-bold mt-3 ">Released<span className=' ml-2 text-xs text-indigo-500'>February 5, 2019</span></small>
                                                        <p className="mt-3 font-light text-justify">{movie.overview.slice(0,387)}</p>
                                                        <span className="mt-3">
                                                            <FontAwesomeIcon icon={ faThumbsUp} className='text-indigo-700 font-semibold '/> {movie.vote_average}
                                                        </span>

                                                    </div>

                                                </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    <div className="container">
                        <h1 className="text-gray-900 my-2 text-2xl mx-2 ">TOP 4 TRENDINGS TVSHOWS </h1>
                        <hr className="bg-gray-50" />

                        <div className="container grid md:grid-cols-2     gap-1.5 py-2 ">
                        

                            {
                                tvshwos && tvshwos.slice(0,4).map(tv_show => (

                                    <div data-aos="zoom-in-up" className="bg-white p-5  text-gray-900 ">

                                                <div className="container grid md:grid-cols-2    gap-1 py-1">

                                                    <img  src={"https://image.tmdb.org/t/p/w500/"+tv_show.poster_path} className=" shadow-md p-2 "/>
                                                    <div className="my-4 mx-2">
                                                        <p className="font-semibold mt-4 text-3xl">
                                                            {tv_show.name}
                                                        </p>
                                                        <small className="font-bold mt-3 ">Released<span className=' ml-2 text-xs text-indigo-500'>February 5, 2019</span></small>
                                                        <p className="mt-3 font-light text-justify">{tv_show.overview.slice(0,387)}</p>
                                                        <span className="mt-3">
                                                            <FontAwesomeIcon icon={ faStar} className='text-indigo-700 font-semibold '/> {tv_show.vote_average}
                                                        </span>
                                                        <p className="mt-3 font-bold text-justify">Media Type: <br />  <span className="uppercase">{tv_show.media_type}</span></p>

                                                    </div>

                                                </div>
                                    </div>
                                ))
                            }
                        
                        </div>
                    </div>

            </section>
        </div>
    );
}

export default Blog;