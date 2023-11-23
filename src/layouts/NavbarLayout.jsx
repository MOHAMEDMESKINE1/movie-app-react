import React from 'react';
import Logo from '../assets/logoo.png'
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faHome, faTvAlt, faVideo } from '@fortawesome/free-solid-svg-icons';

import { Avatar, Dropdown } from 'flowbite-react';
function NavbarLayout() {
    return (
        <>
        
            <nav class="nav flex flex-wrap items-center justify-between px-8 shadow-sm">
                <div  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  class="flex flex-no-shrink items-start mr-6 py-3 text-grey-darkest">
                
                    <Link to={"/"} className='flex justify-start'>
                        <img src={Logo} className="mr-2 h-10 w-10" alt="Flowbite React Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-sky-400 ">PELICULA</span>

                    </Link>
                </div>

                <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
                <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span class="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">

                    <li class="border-t md:border-none">
                        <Link to={"/"} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        
                        <FontAwesomeIcon icon={faHome}   className=' text-xs text-gray-900 mr-2'/>  Home
                        </Link>
                    </li>

                    <li class="border-t md:border-none">
                    <Link to={"/tvshows"} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        <FontAwesomeIcon icon={faTvAlt}   className=' text-xs text-gray-900 mr-2'/>
                            TvShows
                    </Link>
                    </li>
                    
                    <li class="border-t md:border-none">
                    <Link to={"/movies"} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        <FontAwesomeIcon icon={faVideo}   className=' text-xs text-gray-900 mr-2'/>
                        Movies
                    </Link> 
                    </li>
                    
                    <li class="border-t md:border-none">
                    <Link to={"/blog"} class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        <FontAwesomeIcon icon={faBlog}   className=' text-xs text-gray-900 mr-2'/>
                        Blog
                    </Link> 
                    </li>

                    <div className="flex md:order-2 py-2 ">
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <Link to={"/login"} >Login</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to={"/register"} >Register</Link>
                    </Dropdown.Item>
                 
                    </Dropdown>
                
                </div>
                    
                    
                </ul>
            </nav>
            <div className="container ">
                <Outlet/>
            </div>
        </>
    );
}

export default NavbarLayout;