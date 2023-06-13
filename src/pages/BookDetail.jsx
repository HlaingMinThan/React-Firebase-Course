import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import bookImg from '../assets/book.png';
import useTheme from '../hooks/useTheme';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function BookDetail() {

    let { id } = useParams();
    let [error, setError] = useState('');
    let [book, setBook] = useState(null);
    let [loading, setLoading] = useState(false);
    let { isDark } = useTheme();

    useEffect(() => {
        setLoading(true)
        let ref = doc(db, 'books', id);
        getDoc(ref).then(doc => {
            if (doc.exists()) {
                let book = { id: doc.id, ...doc.data() };
                setBook(book)
                setLoading(false)
                setError('');
            } else {
                setError('no document found')
                setLoading(false)
            }
        })
    }, [id])

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>loading ....</p>}
            {book && (
                <div className={`grid grid-cols-2 h-screen ${isDark ? 'text-white' : ''}`}>
                    <div>
                        <img src={bookImg} alt="" className='w-[80%]' />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>{book.title}</h1>
                        <div className='space-x-3'>
                            {book.categories.map(cateogry => (
                                <span className='bg-blue-500 text-white rounded-full text-sm px-2 py-1' key={cateogry}>{cateogry}</span>
                            ))}
                        </div>
                        <p>
                            {book.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
