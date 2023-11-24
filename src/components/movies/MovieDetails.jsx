import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiKey } from '../../ApiKey/apikey';
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
            // console.log(response.data);


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
               
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-4">
                    <Carousel slide={false}>
                            {video?.map(video => (
                                    <iframe
                                        className=' rounded-md w-full '
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
                <div  class="md:w-full m-5 p-2   overflow-hidden shadow-lg  flex md:m-auto justify-center">
                    <div class="md:flex-shrink-0   ">
                    <img class=" hidden md:block md:w-auto rounded-lg "
                        src={"https://image.tmdb.org/t/p/w500/"+movie?.poster_path}
                        alt="A Quiet Place movie poster" />
                    </div>
                    <div   class="flex flex-col p-5   flex-grow md:px-8 md:py-4 rounded-lg bg-white text-gray-900">
                        <div class="font-bold text-2xl md:text-2xl lg:text-4xl text-gray-800 movie--title">
                            {movie?.original_title} 
                            {/* relase */}
                            <div class="center mx-2 relative inline-block select-none whitespace-nowrap rounded-full bg-teal-500 px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                            <div class="absolute top-2/4 left-1 h-5 w-5 -translate-y-2/4">
                                <img
                                alt="tania andrew"
                                src={"https://image.tmdb.org/t/p/w500/"+movie?.poster_path}
                                class="relative inline-block h-5 w-5 translate-x-px translate-y-px rounded-full object-cover object-center"
                                />
                            </div>
                            <div class="ml-4 mt-px">
                                <p class="block font-sans text-sm font-medium capitalize leading-none text-white antialiased">
                                    {movie?.vote_average}
                                </p>
                            </div>
                            </div>                            
                            {/* relase */}
                        </div>
                        <span class=" movie--year  text-xl lg:text-sm lg:mb-4 text-gray-800">{movie?.release_date}</span>
                        <div class="flex-grow">
                            <p class="md:text-xl  text-gray-700 leading-snug truncate-overflow">{movie?.overview}</p>
                            
                            {/* Countries */}
                            <h2 className="font-light my-2 text-gray-950 ">Production Countries</h2>
                            <div className="flex   justify-start">
                           
                            {
                                    movie?.production_countries?.map((country) => (

                                        country && <p className="text-semibold mr-2 text-gray-700 bg-gray-50 p-2 border">{country.name} </p>
                                ))
                            }
                         
                            </div>
                            {/* Languages */}
                            <h2 className="font-light my-2 text-gray-950">Spoken Languages</h2>

                            <div className="flex   justify-start">

                                {
                                    movie?.spoken_languages?.map((language) => (

                                        language.name && <p className="text-semibold mr-2 text-gray-700 bg-gray-50 p-2 border">{language.name} </p>
                                    ))
                                }
                            
                            </div>
                            {/* Companies */}
                            <h2 className="font-light my-2 text-gray-950">Companies</h2>

                            <div className="flex   justify-start">
                           
                                {
                                     movie?.production_companies?.map((company) => (

                                        company.logo_path ? <img class="w-16 h-16 mx-2  mb-4"src={"https://image.tmdb.org/t/p/w500/"+company.logo_path} alt="" /> : company.name 
                                    ))
                                }
                              
                            </div>
                           {/* genres */}
                           <h2 className="font-light my-2 text-gray-950">Genres</h2>

                           <div class="button-container flex justify-start mb-2">
                           
                            <div className='flex justify-end '>
                            {
                                movie?.genres?.map((genre) => (
                                    <p  class="text-lg lg:text-sm  mx-2 font-bold p-2  rounded bg-orange-200 text-orange-700">{genre.name} </p>
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


