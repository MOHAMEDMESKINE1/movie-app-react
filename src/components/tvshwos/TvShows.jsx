import   { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { apiKey } from '../../ApiKey/key';



export default  function  TvShows() {

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [tvShow, setTvShow] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [tvImages, setTvImages] = useState([]);
    const [visibleTvShows, setVisibleTvShows] = useState(4);
    const [isLoading, setIsLoading] = useState(true);

    const sectionStyle = {
        backgroundImage: `url(${tvImages[backgroundIndex]})`,
        backgroundSize: ' cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px',
        transition:"background-image 0.5s ease-in-out",
        
    }      
    useEffect(() => {

        const intervalId = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % tvImages.length);
        }, 5000);
       
        return () => clearInterval(intervalId);
    
      }, [backgroundIndex, tvImages.length]);

    const handleViewMore = () => {
        
        setVisibleTvShows((prevVisibleTvShows) => prevVisibleTvShows + 6);
    };

      const fetchAllTvShows =async () =>{
        try 
        {
           
            
            const allTvShows = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`);
            setTvShow(allTvShows.data.results);

            // Store the movie images
            setTvImages(allTvShows.data.results.map(tv_show => `https://image.tmdb.org/t/p/original/${tv_show.poster_path}`));
            setIsLoading(false)

        } catch (error) {
        console.error('Error fetching tvshows:', error);
        }
      }

    //searchTvShow
    const searchTvShow = async () => {
       
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/tv`, {
              params: {
                api_key: apiKey,
                include_adult: false,
                language: 'en-US',
                page: 1,
                query: searchQuery,
              },
            });
            setTvShow(response.data.results);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
         
    };
    // searchTv
    useEffect(() => {
      
        if (searchQuery.trim() !== '') {
            searchTvShow();
        }else{
            fetchAllTvShows()
        }
    }, [searchQuery]);
   
    if(isLoading){
        return <div className="flex items-center justify-center  my-52 space-x-2">
                    <div aria-label="Loading..." role="status">
                        <svg width="300" height="300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" className="animate-spin w-16 h-16    stroke-slate-500">
                        <path  d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
                        </path>
                        </svg>
                        <span className="text-xs font-medium text-slate-500 m-auto">Loading...</span>

                    </div>
                </div>
    }
    return (
        <>
            
            <section  style={sectionStyle}>
                <div className="justify-center  min-w-full">
                <div className='hidden  lg:flex   items-center flex-col justify-center '  data-aos-easing="ease-in-sine"  data-aos-duration="2000"  data-aos='fade-right'>
                    <h1 className='uppercase text-white font-bold  text-8xl md:text-9xl text-center text-shadow-lg mt-36'   >TRENDING TVSHOWS  </h1>
                    <p className='lead uppercase text-white  text-center font-bold my-5 text-3xl md:text-5xl'>Explore Tvshows New World ! </p>
                        
                </div>
                   
                </div>
            </section>
            <section id='view_more' className="bg-gray-900 p-5">
            <div  className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 text-center md:text-left  lg:gap-3 py-12">
            <div className='p-4     w-full'>
                        <h1 className='text-2xl lg:text-3xl text-white font-bold mx-2'>Popular TvShows to Watch Now</h1>
                        <p className='text-xllg:text-2xl  font-light text-white mx-2'>Most watched TvShows by days</p>
                        <div className="text-gray-500 font-bold lg:mt-4 p-2">
                        <input
                                type="text"
                                className=' w-full p-2  shadow-sm md:w-52 '
                                placeholder="Search for tv shows..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                    </div>
   
                        {  
                        tvShow.slice(0, visibleTvShows).map((tv_show) => (
                            <Link key={tv_show.id} to={`/tvshow/details/${tv_show.id}` }>
                                <div className="m-auto flex justify-center items-center  text-white p-2 md:p-3">
                                    <div className="" data-aos-easing="ease-in-sine"  data-aos-duration="1000"  data-aos='zoom-in'>
                                        <img src={"https://image.tmdb.org/t/p/w500/"+tv_show.poster_path} className=' h-auto md:h-1/2 w-auto shadow-sm shadow-white rounded-sm mb-3' alt="" />
                                        <span className=" leading-3">{tv_show.original_name} </span>
                                        <span className=" leading-4"> {tv_show.first_air_date}</span>
                                    </div>  
                             
                                  </div> 
                            </Link>
                        
        
                        ))
                      
                      }
                    
                    
       
                </div>
                <div className=" flex justify-center">
                {   
                    visibleTvShows < tvShow.length && (
                        <button onClick={handleViewMore} className=' bg-transparent  hover:bg-white hover:text-black   rounded-sm  shadow-lg   p-2.5 w-52   border-2 uppercase text-white font-bold  '>
                            <FontAwesomeIcon icon={faPlus} size='2'/>    View More
                        </button>

                )}
                            
                </div>
            </section>
          
            
        </>
    );
}
