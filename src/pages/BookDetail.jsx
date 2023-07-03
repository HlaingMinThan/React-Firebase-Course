import { useParams } from 'react-router-dom'
import useTheme from '../hooks/useTheme';

import useFirestore from '../hooks/useFirestore';
import NoteForm from '../components/NoteForm';

export default function BookDetail() {

    let { id } = useParams();
    let { getDocument } = useFirestore();
    let { error, loading, data: book } = getDocument('books', id)
    let { isDark } = useTheme();



    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>loading ....</p>}
            {book && (
                <>
                    <div className={`grid grid-cols-2 ${isDark ? 'text-white' : ''}`}>
                        <div>
                            <img src={book.cover} alt="" className='w-[80%]' />
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
                    <div>
                        <h3 className='font-bold text-xl text-primary my-3 text-center'>My Notes</h3>
                        <NoteForm />
                        <div className='border-2 shadow-md p-3 my-3'>
                            <div className='flex space-x-3'>
                                <img src="https://d27v83ov1up738.cloudfront.net/user-profiles/zhW65iWspiv5FRKjp465yKLiQt9kPUhd2L8UDfV0.jpg" alt="" className='w-12 h-12 rounded-full' />
                                <div>
                                    <h3>Hlaing min than</h3>
                                    <div className='text-gray-400'>20.6.2001</div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima, fugit fugiat non, tenetur, culpa cum veritatis animi autem neque temporibus et explicabo iure! Maxime ad tenetur consequatur quasi atque.
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
