import Logo from '../assets/logoo.png'
import { Link } from 'react-router-dom';
import witcher from '../assets/witcher.jpeg'
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    
    function scrollToTop() {
        $('html, body').animate({
          scrollTop: 0
        }, 'slow');
      }
  
      // Show/hide the button based on scroll position
      $(window).scroll(function() {
        var btn = $("#scrollToTopBtn");
        if ($(this).scrollTop() > 20) {
          btn.show();
        } else {
          btn.hide();
        }
      });
   
    const backGroundMovie = {
        
            backgroundImage: `url(${witcher})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '600px',
            transition:"background-image 0.5s ease-in-out",
            object:"content",
            opacity:"1"
            
            
        }  
    
    return (
        <div className='' >
           <footer className="bg-gray-100 " style={backGroundMovie} >
              
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <div  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  className="flex flex-no-shrink items-start mr-6 py-3 text-grey-darkest">
                        
                                    <Link to={"/"} className='flex justify-start'>
                                        <img src={Logo} className="mr-2 h-10 w-10" alt="Flowbite React Logo" />
                                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-sky-400 ">PELICULA</span>

                                    </Link>
                            </div>
                            <span className="text-sm text-gray-500 sm:text-center ">© 2023  <Link to="/" className="hover:underline">PELICULA </Link>. All Rights Reserved.</span>

                        </div>
                        <div className="grid grid-cols-2 gap-5 sm:gap-8 sm:grid-cols-3 ">
                            <div className=''>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                                <ul className="text-gray-500   ">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:text-gray-800  hover:underline">PELICULA </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/tvshows" className="hover:text-gray-800  hover:underline">TvShows </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/movies" className="hover:text-gray-800  hover:underline">Movies </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/blog" className="hover:text-gray-800  hover:underline">Blog </Link>
                                    </li>
                                </ul>
                            </div>
                            <div  className=''>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4 flex justify-start">
                                       
                                        <a href="https://github.com/MOHAMEDMESKINE1" className=" hover:text-gray-800 hover:underline ">Github</a>
                                        
                                    </li>
                                    <li className="mb-4 justify-start">
                                        <a href="#" className=" hover:text-gray-800 hover:underline">Discord</a>
                                    </li>
                                    <li className="mb-4 justify-start">
                                        
                                        <a href="#" className=" hover:text-gray-800 hover:underline">Facebook</a>
                                    </li>
                                    <li className="mb-4 justify-start">
                                        <a href="#" className=" hover:text-gray-800 hover:underline">Instagram</a>
                                    </li>
                                    <li className="mb-4 justify-start">
                                        <a href="#" className=" hover:text-gray-800 hover:underline">X</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-gray-800 hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-800 hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
            <button onClick={scrollToTop} id="scrollToTopBtn" className="fixed bottom-20 right-10 md:right-5 bg-gray-900   text-white rounded-full   border p-3.5 border-gray-300 cursor-pointer hidden">
                <FontAwesomeIcon   icon={faArrowUp} bounce/>
            </button>
        </div>
    );
}

export default Footer;