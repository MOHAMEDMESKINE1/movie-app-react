import  {useEffect, useState } from 'react';
import Logo from '../assets/logoo.png'
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBook, faHome, faTvAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Dropdown } from 'flowbite-react';
import LoginGoogle from '../components/login/LoginGoogle';

function NavbarLayout() {
    
    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        // Check local storage for user data on page load
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
          setLoggedInUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = (user) => {
       
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        setLoggedInUser(user);
    };
    const handleLogout = () => {
        // Clear the user's session 
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
      };
    return (
        <>
        
            <nav className="flex flex-wrap items-center justify-between px-8 shadow-sm">
                <div  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"  className="flex flex-no-shrink items-start mr-6 py-3 text-grey-darkest">
                
                    <Link to={"/"} className='flex justify-start'>
                        <img src={Logo} className="mr-2 h-10 w-10" alt="Flowbite React Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-sky-400 ">PELICULA</span>

                    </Link>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">

                    <li className="border-t md:border-none">
                        <Link to={"/"} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        
                        <FontAwesomeIcon icon={faHome}   className=' text-xs text-gray-900 mr-2'/>  Home
                        </Link>
                    </li>

                    <li className="border-t md:border-none">
                    <Link to={"/tvshows"} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        <FontAwesomeIcon icon={faTvAlt}   className=' text-xs text-gray-900 mr-2'/>
                            TvShows
                    </Link>
                    </li>
                    
                    <li className="border-t md:border-none">
                    <Link to={"/movies"} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        <FontAwesomeIcon icon={faVideo}   className=' text-xs text-gray-900 mr-2'/>
                        Movies
                    </Link> 
                    </li>
                   
                    <li className="border-t md:border-none">
                        <Link to={"/books"} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                            <FontAwesomeIcon icon={faBook}   className=' text-xs text-gray-900 mr-2'/>
                            Books
                        </Link> 
                    </li>
                   
                    
                    <li className="border-t md:border-none">
                    <Link to={"/blog"} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                        <FontAwesomeIcon icon={faBlog}   className=' text-xs text-gray-900 mr-2'/>
                        Blog
                    </Link> 
                    </li>
                   

                    <div className="flex md:order-2 py-2 ">
                    
                   
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            loggedInUser ? <Avatar alt="User settings" img={loggedInUser.picture}  rounded /> : <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                        >
                        <Dropdown.Header>
                        {loggedInUser ? (
                            <>
                                <img src={loggedInUser.picture} alt="User" className="w-8 h-8 mb-2 rounded-full" />
                                <span className="block  font-semibold text-sm">{loggedInUser.name}</span>
                                <span className="block   truncate text-sm font-medium">{loggedInUser.email}</span>
                            </>
                            ) : (
                            <>
                                <Avatar alt="User settings" className="flex justify-start" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded /> 
                                <span className="block font-medium text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@gmail.com</span>
                            </>
                            )}
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <LoginGoogle  onLogin={handleLogin}/>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            {loggedInUser ? <button className='font-semibold' onClick={handleLogout}>Logout</button>:''}

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