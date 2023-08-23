import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import trashIcon from '../assets/trash.svg';

export default function NoteList() {

    let { id } = useParams();
    let { getCollection, deleteDocument } = useFirestore();
    let { error, data: notes, loading } = getCollection('notes', ['bookUid', '==', id]);

    let deleteNote = async (id) => {
        await deleteDocument('notes', id);
    }

    return (
        !!notes.length && (
            notes.map(note => (
                <div key={note.id} className='border-2 shadow-md p-3 my-3' >
                    <div className='flex space-x-3 justify-between'>
                        <div>
                            <img src="https://d27v83ov1up738.cloudfront.net/user-profiles/vJNqK2Ni6mJXFerw9EI4FjRxph5hINFMqV9eBhsX.jpg" alt="" className='w-12 h-12 rounded-full' />
                            <div>
                                <h3>Hlaing min than</h3>
                                <div className='text-gray-400'>{moment(note?.date?.seconds * 1000).fromNow()}</div>
                            </div>
                        </div>
                        <div onClick={() => deleteNote(note.id)}>
                            <img className='cursor-pointer' src={trashIcon} alt="" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        {note.body}
                    </div>
                </div >
            ))
        )
    )
}
