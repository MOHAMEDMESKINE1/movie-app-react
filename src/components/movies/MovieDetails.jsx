import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiKey } from '../../ApiKey/key';
import IsLoading from '../IsLoading';
import useFetch from '../../customHooks/useFetch';
import { Carousel } from 'flowbite-react';
export default function MovieDetails () {

    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const [video, setVideo] = useState([]);

    const fetchMovieDetails = async () => {
        

        try {

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en-US',
            },
            });
            setMovie(response.data);


            const videostMovie = await useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`);
            setVideo(videostMovie);

        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };
    useEffect(() => {
        fetchMovieDetails();
    }, []);


    return (
        <div>
          <section className='bg-gray-900 py-5 text-white'>
               
          <div className="h-96  sm:h-96 xl:h-80 2xl:h-96 p-4">
          <Carousel slide={false}>
                            {video?.map(video => (
                                    <iframe
                                        className='shadow-md rounded-md w-full '
                                        key={video.id}
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                            ))}
                    </Carousel>
                </div>
                <div  className="md:w-full m-3 p-4   overflow-hidden shadow-lg  flex md:m-auto justify-center">
                    <div className="md:flex-shrink-0   ">
                    <img className=" hidden md:block md:w-auto  h-full object-fill  "
                        src={"https://image.tmdb.org/t/p/w500/"+movie?.poster_path}
                        alt="A Quiet Place movie poster" />
                    </div>
                    <div   className="flex flex-col p-4   flex-grow md:px-8 md:py-4 bg-white text-gray-900">
                        <div className="font-bold text-3xl md:text-2xl lg:text-4xl text-gray-800 ">
                            {movie?.original_title} 
                            {/* relase */}
                            <div className="center mx-2 relative inline-block select-none whitespace-nowrap rounded-full bg-teal-500 px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div className="absolute top-2/4 left-1 h-5 w-5 -translate-y-2/4">
                                <img
                                alt="tania andrew"
                                src={"https://image.tmdb.org/t/p/w500/"+movie?.poster_path}
                                className="relative inline-block h-5 w-5 translate-x-px translate-y-px rounded-full object-cover object-center"
                                />
                            </div>
                            <div className="ml-4 mt-px">
                                <p className="block font-sans text-sm font-medium capitalize leading-none text-white antialiased">
                                    {movie?.vote_average}
                                </p>
                            </div>
                            </div>                            
                            {/* relase */}
                        </div>
                        <span className=" movie--year  text-xl lg:text-sm lg:mb-4 text-gray-800">{movie?.release_date}</span>
                        <div className="flex-grow">
                            <p className="md:text-xl text-justify  text-gray-700 leading-snug truncate-overflow">{movie?.overview}</p>
                            
                            {/* Countries */}
                            <h2 className="font-light my-2 text-gray-950 ">Production Countries</h2>
                            <div className="flex   justify-start">
                           
                            {
                                    movie?.production_countries?.map((country) => (

                                        country && <p className="text-semibold mr-2 text-gray-700 bg-gray-50 p-2 border"  >{country.name}  </p>
                                ))
                            }
                         
                            </div>
                            {/* Languages */}
                            <h2 className="font-light my-2 text-gray-950">Spoken Languages</h2>

                            
                            {/* Companies */}
                            <h2 className="font-light my-2 text-gray-950">Companies</h2>

                            <div className="grid  grid-cols-3 gap-2">
                           
                                 
                                {
                                     movie?.production_companies?.map((company) => (

                                        company.logo_path ? <img className="w-16 h-16 mx-2  mb-4"src={"https://image.tmdb.org/t/p/w500/"+company.logo_path} alt="" key={company.id} /> : company.name 
                                    ))
                                }
                                
                              
                            </div>
                           {/* genres */}
                           <h2 className="font-light my-2 text-gray-950">Genres</h2>

                           <div className="button-container flex justify-start mb-2">
                           
                            <div className='flex justify-end '>
                            {
                                movie?.genres?.map((genre) => (
                                    <p  className="text-lg lg:text-sm  mx-2 font-bold p-2  rounded bg-orange-200 text-orange-700" key={genre.id}>{genre.name} </p>
                                ))
                            }
                            </div>

                                              
                            </div>
                              {/* home Page */}
                              <h2 className="font-light my-2 text-gray-950">Home Page</h2>

                                <div className="flex   justify-start">
                                    <a href={movie?.homepage} className="text-semibold mr-2 text-blue-700 bg-gray-50 p-2 border">{movie?.original_title} </a>
                                </div>    
                       
                        </div>
                        
                    </div>
                </div>
            </section>   
            
            <IsLoading/>

        </div>
    );
}


