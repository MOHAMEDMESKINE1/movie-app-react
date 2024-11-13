import React, { useEffect, useState } from 'react';
import booksPic from '../../assets/books.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Books() {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBooks = async (query) => {
       
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        setBooks(response.data.items);
        setIsLoading(false)
    };
  

    const sectionStyle = {
        backgroundImage: `url(${booksPic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '600px',
        transition:"background-image 2s ease",

        
    }
   
    const handleChange = (e) => {
        setSearch(e.target.value);
     };
    
     const handleSubmit = (e) => {
        e.preventDefault();
       
        fetchBooks(search);
       
     };
     useEffect(()=>{
        fetchBooks()
     },[])

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
        <div>
            <section className=' '  style={sectionStyle}>
                <div className="flex items-center justify-center  ">
                    <div data-aos-easing="ease-in-sine"  data-aos-duration="1000"  data-aos='fade-right'  className=' flex items-center flex-col justify-center ' >
                        <div className="m-3.5">
                            <h1 className='uppercase text-white font-bold text-7xl md:text-9xl text-center text-shadow-lg mt-36'   >BOOKS </h1>
                            <p className='lead uppercase text-white  text-center font-bold m-5 text-3xl md:text-5xl'>Navigate World Magic Books ! </p>

                        </div>                       
                        <div className='flex justify-center mx-auto '>
                   
                                        
                            <form onSubmit={handleSubmit}>   
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative  m-5">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input onChange={handleChange} type="search" id="default-search" className="block w-80 md:max-w-md p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books ..." required/>
                                    <button type="submit" className="text-white p-3 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </form>

                   
                        </div>
                    </div>
                   
                </div>
            </section>
            {/* search book */}
            <section className=" py-5 bg-gray-100 " >
                     
                <h1 className="text-center text-4xl font-bold underline">Books</h1>
                
                <div   className='  items-center justify-center grid grid-cols-2  md:grid-cols-3  md:m-5  text-center  md:gap-2'>
                    
                        {
                        
                            books.slice(0,6).filter(book => book.volumeInfo.language==="en").map((book) => (
                                // Check if the book has a thumbnail before rendering the div
                                book.volumeInfo.imageLinks?.thumbnail && (
                                    <Link to={`/books/details/${book.id}`} key={book.id} className='m-auto'>
                                    <img
                                        data-aos='fade-up'
                                        data-aos-easing="ease-in-sine"  data-aos-duration="500"
                                        src={book.volumeInfo.imageLinks.thumbnail}
                                        alt={book.volumeInfo.title}
                                        className='max-h-80 w-auto bg-white p-2 shadow-lg object-content my-4'
                                    />
                                    <p className='font-semibold mt-4 '>
                                        {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
                                    </p>
                                    <p className='font-semi-bold text-indigo-700 '>
                                        {book.volumeInfo.publishedDate && book.volumeInfo.publishedDate}
                                    </p>
                                    <p className='font-semi-bold text-green-700 '>
                                        {book.volumeInfo.pageCount && book.volumeInfo.pageCount} Pages
                                    </p>
                                    </Link>
                                )
                                ))
                        }
                </div>
                       
                     
                
            </section>
        </div>
    );
}

export default Books;