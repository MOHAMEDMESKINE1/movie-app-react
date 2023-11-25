import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'flowbite-react';
function BookDetails() {

    const {id} = useParams();
    const [book,setBook] = useState([])

    const fetchBookDetails = async () => {

        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(response.data);
      };

    useEffect(()=>{
        fetchBookDetails()
    },[])
    return (
        <div>
              <div>
               
                {book ? (
                   
                    <div className="bg-gray-100   text-gray-900 ">

                        <div className="container grid grid-cols-1 m-auto p-3">

                          
                            <div className="mb-5">
                                <img  className=" h-full  m-auto w-auto mb-5 bg-white p-2 shadow-lg object-content my-4"  src={book.volumeInfo?.imageLinks?.thumbnail}  alt={book.volumeInfo?.title} />

                            </div>
                            <div className="overflow-x-auto  my-3">
                                <Table className='mt-5 shadow-md'>
                                    <Table.Head className='bg-gray-100'>
                                        <Table.HeadCell>ISBN</Table.HeadCell>
                                        <Table.HeadCell>AUTHOR</Table.HeadCell>
                                        <Table.HeadCell rowSpan={3}>CATEGORIES</Table.HeadCell>
                                        <Table.HeadCell>PAGES</Table.HeadCell>
                                        <Table.HeadCell>RELEASE DATE</Table.HeadCell>
                                        <Table.HeadCell >DIMENSIONS</Table.HeadCell>
                                        <Table.HeadCell>LANGUAGES</Table.HeadCell>
                                        <Table.HeadCell>PUBLISHER</Table.HeadCell>
                                        <Table.HeadCell>VERSION</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                    <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
                                        
                                        <Table.Cell>{book.volumeInfo?.industryIdentifiers?.map(isbn => (<span className='mx-2'>{isbn.type}</span>))}</Table.Cell>
                                        <Table.Cell>{book.volumeInfo?.authors}</Table.Cell>
                                        <Table.Cell rowSpan={3}>{book.volumeInfo?.categories?.map(category => (<span className=''>{category}  </span>))}</Table.Cell>
                                        <Table.Cell >{book.volumeInfo?.pageCount} Pages</Table.Cell>
                                        <Table.Cell>{book.volumeInfo?.publishedDate}</Table.Cell>
                                        <Table.Cell colSpan={1}>
                                          <ul>
                                                <li>height: <br /> <strong>{book.volumeInfo?.dimensions?.height}</strong> </li>
                                                <li>width: <br />  <strong>{book.volumeInfo?.dimensions?.width}</strong></li>
                                                <li>thickness: <br /> <strong>{book.volumeInfo?.dimensions?.thickness}</strong></li>
                                          </ul>
                                            
                                        </Table.Cell>
                                        <Table.Cell>{book.volumeInfo?.language}</Table.Cell>
                                        <Table.Cell>{book.volumeInfo?.publisher}</Table.Cell>
                                        <Table.Cell>{book.volumeInfo?.contentVersion}</Table.Cell>
                                        
                                    </Table.Row>
                                
                                    </Table.Body>
                                </Table>
                            </div>
                            <div className="my-4 mx-2">
                                <p className="font-semibold mt-4 text-3xl">
                                    {book.volumeInfo?.title}
                                </p>
                                <small className="font-bold  ">Released<span className=' ml-2 text-xs text-indigo-500'>{book.volumeInfo?.publishedDate}</span></small><br />
                                <small className="font-bold  ">Author <span className=' ml-2 text-xs text-indigo-500'>{book.volumeInfo?.authors}</span></small>
                                <p className="mt-3 font-light text-justify">{book.volumeInfo?.description}</p>
                                {/* <span className="mt-3">
                                    <FontAwesomeIcon icon={ faThumbsUp} className='text-indigo-700 font-semibold '/> {movie.vote_average}
                                </span> */}

                            </div>

                        </div>
                    </div>
                ) : (
                    <p>Loading book details...</p>
                )}
                </div>
               
        </div>
    );
}

export default BookDetails;