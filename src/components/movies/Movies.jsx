import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import { apiKey } from '../../ApiKey/key';
import IsLoading from '../IsLoading';
export default  function  Movies() {

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [movieImages, setMovieImages] = useState([]);

    const [visibleMovies, setVisibleMovies] = useState(4);

    const sectionStyle = {
        backgroundImage: `url(${movieImages[backgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px',
        transition:"background-image 0.5s ease-in-out",
        object:"cover"
        
    }      

    useEffect(() => {

        const intervalId = setInterval(() => {
          setBackgroundIndex((prevIndex) => (prevIndex +4) % movieImages.length);
        }, 5000);
    
        return () => clearInterval(intervalId); 
    
      }, [backgroundIndex, movieImages.length]);

    const handleViewMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 6);
    };

      const fetchAllMovies =async () =>{
        try{

            const allMovies = await useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
            setMovies(allMovies);

            // setMovies  Image
            setMovieImages(allMovies.map(movie => `https://image.tmdb.org/t/p/original/${movie.poster_path}`));

        } catch (error) {
        console.error('Error fetching movies:', error);
        }
      }
    //   searchMovies
    const searchMovies = async () => {
       
        try{

            const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: apiKey,
                include_adult: false,
                language: 'en-US',
                page: 1,
                query: searchQuery,
            },
            });
          

            setMovies(response.data.results);

        } catch (error) {
        console.error('Error fetching movies:', error);
        }
         
    };
    
    useEffect(() => {
      
        if (searchQuery.trim() !== '') {
            searchMovies();
        }else{
            fetchAllMovies()
        }
    }, [searchQuery]);
    
   
    return (
        <>

            <section  style={sectionStyle}>
            <div className="h-screen flex items-center justify-center  min-w-full">
            <div className=' hidden  lg:flex items-center flex-col justify-center ' data-aos-easing="ease-in-sine"  data-aos-duration="2000"  data-aos='fade-right'>
                    <h1 className='uppercase text-white font-bold  text-5xl md:text-9xl text-center text-shadow-lg'   >NEW MOVIES  </h1>
                    <p className='lead uppercase text-white  text-center font-bold my-5 text-3xl'>Taste our new movies  journey  </p>
                   
                </div>
                   
                </div>
            </section>
            <section className="bg-gray-900">
                <div  className=" container grid md:grid-cols-5  text-center md:text-left  m-auto  gap-2 py-12">
                    <div className='p-4 '>
                        <h1 className='text-4xl m-5 text-white font-bold'>Popular Movies to Watch Now</h1>
                        <p className='text-2xl  font-light text-white'>Most watched movies by days</p>
                        <div className="text-gray-500 font-bold mt-4 p-2">
                        <input
                                type="text"
                                className=' w-full p-2  shadow-sm md:w-52 '
                                placeholder="Search for movies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                    </div>
                   
                  
                     {movies.slice(0, visibleMovies).map((movie) => (
                       <Link key={movie.id} to={`/movies/details/${movie.id}` }>
                             <div className="m-auto flex justify-center items-center  text-white p-2 md:p-3">
                                <div className="" data-aos-easing="ease-in-sine"  data-aos-duration="1000"  data-aos='zoom-in'>
                                    <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} className=' h-auto md:h-1/2 w-auto shadow-sm shadow-white rounded-sm mb-3' alt="" />
                                    <span className=" leading-3">{movie.original_title} ,{movie.Type}</span>
                                    <span className=" leading-4"> {movie.release_date}</span>
        
                                </div>                       
                            </div> 
                       </Link>
                           
                    ))}
       
       
                </div>
                <div className=" flex justify-center items-center m-auto  py-5">
                {visibleMovies < movies.length && (
                        <button onClick={handleViewMore} className=' bg-transparent  hover:bg-white hover:text-black   rounded-sm  shadow-lg   p-2.5 w-52   border-2 uppercase text-white font-bold  '>
                            <FontAwesomeIcon icon={faPlus} size='2'/>    View More
                        </button>

                )}
                            
                </div>
            </section>

           

             
            
        </>
    );
}
