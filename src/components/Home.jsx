import  {useEffect, useState } from 'react';
import spider from '../assets/spider.jpg'
import man from '../assets/man.jpg'
import show from '../assets/show.jpg'
import stage from '../assets/stage.jpg'
import snow from '../assets/snow.jpg'
import batman from '../assets/batman.jpg'
import sitting from '../assets/sitting.jpg'
import wild from '../assets/wild.jpg'
import album from '../assets/album.png'
import vintage from '../assets/vintage.jpg'
import malficent from '../assets/malficent.jpg'
import jocker from '../assets/jocker.jpg'
import book from '../assets/book.jpg'
import { Card } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';


export default function Home() {

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const images = [stage,man,show ];
    const [isLoading, setIsLoading] = useState(true);

    const sectionStyle = {
        backgroundImage: `url(${images[backgroundIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '600px',
        transition:"background-image 2s ease"
        
    }
    
    const stationSection = {
        backgroundImage: `url(${sitting})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '950px',
      
    }
   

      useEffect(() => {
        const intervalId = setInterval(() => {
          setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        setIsLoading(false)
        return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    
      }, [backgroundIndex, images.length]);

      if(isLoading){
        return <div className="flex items-center justify-center  my-52 space-x-2">
                    <div aria-label="Loading..." role="status">
                        <svg width="300" height="300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="animate-spin w-16 h-16    stroke-slate-500">
                        <path  d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
                        </path>
                        </svg>
                        <span className="text-xs font-medium text-slate-500 m-auto">Loading...</span>

                    </div>
                </div>
    }
    return (
        <>
            {/* home section */}
            <section  style={sectionStyle} className=''>
                <div className=" flex items-center justify-center   ">
                    <div data-aos-easing="ease-in-sine"  data-aos-duration="2000"  data-aos='fade-right'  className=' flex items-center flex-col justify-center ' >
                        <h1 className='uppercase text-white font-bold text-7xl md:text-9xl text-center text-shadow-lg mt-32'    >PELICULA </h1>
                        <p className='lead uppercase text-white  text-center font-bold my-5 text-3xl md:text-5xl'>a modern way  to watch movies & series </p>
                        <div   className="flex  flex-row  lg:flex-row justify-center md:justify-start w-1/2  my-12">
                            <Link  to={"/movies"} className=' bg-transparent hover:bg-black  rounded-sm  text-center shadow-lg  hover:text-white  px-12 md:p-5    md:mb-0 md:w-full mx-2 border-2 uppercase text-white font-boldl  '><span className="">Explore Movies</span></Link>
                            <Link to={"/tvshows"} className=' bg-transparent hover:bg-black  rounded-sm  text-center shadow-lg  hover:text-white  px-12 md:p-5    md:w-full mx-2 border-2 uppercase text-white font-bold  '>Explore TvShows</Link>

                        </div>
                    </div>
                   
                </div>
            </section>
            {/* section  */}
            <section className=" p-2 md:p-5 bg-gray-100">
                   
                <div className='flex flex-col justify-center text-center items-center my-14'>
                    <h1 className=" text-gray-500  p-1.5   text-xl  font-extrabold">
                        STUNNING HOMEPAGE COLLECTION
                    </h1>
                    <p className="text-4xl md:text-6xl">
                        LIGHTS, CAMERA, PELICULA!  
                    </p>
                </div>

                
                <div  data-aos='fade-up'  className=" grid grid-cols-1  m-5 md:grid-cols-3  gap-2 "   >
    
                    
                    <Card
                        className=""
                        renderImage={() => <img className='rounded-t-lg   object-cover w-full h-52' src={wild} alt="image 1" />}
                       
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                           Wild New Release  2023
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest movies about Nature and Wild Exlpore movie and live the nature.
                        </p>
                    </Card>
                   
                    
                    <Card
                        className=""
                        renderImage={() => <img className='rounded-t-lg   object-fill w-full h-52' src={snow} alt="image 1" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                           Journey to Alaska  2022
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            A Journey to Alaska and explore its secrets and why its so special ..
                        </p>
                        </Card>
                   
                    <Card
                        className=""
                        renderImage={() => <img className='rounded-t-lg   object-cover w-full h-52' src={batman} alt="image 1" />}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            The New Batman 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                           A fight between Evil and Good a new released movie one of the biggest watched movies until now .
                        </p>
                        </Card>
                    
                         
                  
                </div>
                       
            </section>


            {/* section */}
            <section className="   bg-gray-100 text-white" style={stationSection}>
                <div className='flex flex-col justify-center text-center items-center  py-12'>
                        <h1 className="   p-1.5    text-xl  font-extrabold">
                                PORTFOLIO LISTS & SINGLES
                        </h1>
                        <span data-aos="fade-up-right"  className='border-2 text-center w-52 border-gray-50'></span>

                        <p className="text-5xl md:text-6xl font-bold mt-5  shadow-lg">
                                LAST  POSTER MOVIES
                        </p>
                        
                </div>
              
             
                <div className="h-96 w-full bg-transparent p-2   md:p-5 ">
                    <Carousel>

                        <div className="flex h-full items-center justify-center  dark:text-white">
                            <img src={spider} alt="" />
                        </div>
                        <div className="flex h-full items-center justify-center  dark:text-white">
                            <img src={vintage} alt="" />
                        </div>
                        <div className="flex h-full items-center justify-center  dark:text-white">
                            <img src={malficent} alt="" />
                        </div>
                        <div className="flex h-full items-center justify-center  dark:text-white">
                            <img src={jocker} alt="" />
                        </div>
                    </Carousel>
                </div>
               
                
                <div className='   flex items-center justify-center'>
                    <div className="text-center">
                        <h1 className='text-3xl m-5 md:text-7xl font-bold'>DIRECT YOUR NEXT MASTERPIECE WITH PELICULA  </h1>
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className=" mt-12 ">
                            <Link
                            to={'/blog'} 
                            
                            className=' bg-transparent hover:text-black   shadow-lg  hover:bg-white p-5  my-10 mx-2 border-2 uppercase text-white font-bold rounded-sm '>
                                Explore  Our Blog
                            </Link>
                        </div>
                      

                    </div>                    
                </div>

               
              
              

            </section>
            {/* movies */}
            <section className='m-5'>
                    <div className=" grid md:grid-cols-2  m-auto  items-center gap-2 py-5">
                        
                        <div data-aos='fade-right'  className="">
                            <img src={album} className='h-auto object-cover ' alt="" />
                        </div>
                        
                        <div className='p-3 m-5'>
                            <h1 className="text-center text-3xl lg:text-5xl font-bold mb-5">Advanced Movie & TV Show Search</h1>
                            <p className="text-xl text-justify lg:text-2xl font-light ">Discover movies and TV shows like never before with our advanced search system. Find your favorites effortlessly and explore new titles with ease.</p>
                        </div>
                    </div>

            </section>
            {/* movies */}
            <section className='m-5'>
                    <div className=" grid md:grid-cols-2  m-auto items-center  gap-2 py-5">
                        
                       
                        
                        <div className='p-3 m-5'>
                            <h1 className="text-center text-3xl lg:text-5xl font-bold mb-5">Navigating the World of Books with Advanced Search</h1>
                            <p className="text-xl text-justify lg:text-2xl font-light ">Embark on a journey of literary discovery with our advanced search feature. Dive deep into the vast world of books, exploring genres, themes, and authors with precision and ease.</p>
                        </div>
                        <div data-aos='fade-up'  className="">
                            <img src={book} className='    rounded-md shadow-lg ' alt="" />
                        </div>
                    </div>

            </section>

            
        </>
    );
}

