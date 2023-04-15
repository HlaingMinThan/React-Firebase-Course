import React from 'react'
import book from '../assets/book.png';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function BookList() {

    let { data: books, loading, error } = useFetch('http://localhost:3000/books');

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {loading && <p>loading ... </p>}
            {/* book list */}
            {!!books && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    {books.map((b) => (
                        <Link to={`/books/${b.id}`} key={b.id}>
                            <div className='p-4 border border-1'>
                                <img src={book} alt="" />
                                <div className='text-center space-y-2 mt-3'>
                                    <h1>{b.title}</h1>
                                    <p>{b.description}</p>
                                    {/* genres */}
                                    <div className='flex flex-wrap'>
                                        {b.categories.map(c => (
                                            <span key={c} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {c}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
