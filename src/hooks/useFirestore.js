import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../firebase';

export default function useFirestore() {
  
    let getCollection = (colName,_q) => {
        let qRef = useRef(_q).current 
        let [error, setError] = useState('');
        let [data, setData] = useState([]);
        let [loading, setLoading] = useState(false);

        useEffect(function () {
            setLoading(true)
            let ref = collection(db, colName);
            let qureires = [];
            if(qRef){
                qureires.push(where(...qRef))
            }
            qureires.push(orderBy('date', 'desc')); //uid asc , date desc -> index
            let q = query(ref, ...qureires )
            onSnapshot(q, docs => {
                if (docs.empty) {
                    setError('no documents found');
                    setLoading(false)
                } else {
                    let collectionDatas = [];
                    docs.forEach(doc => {
                        let document = { id: doc.id, ...doc.data() }
                        collectionDatas.push(document)
                    })
                    setData(collectionDatas);
                    setLoading(false)
                    setError('');
                }
            })
        }, [qRef])


        return {error,data,loading};
    }

    let getDocument = (colName,id) => {

        let [error, setError] = useState('');
        let [data, setData] = useState(null);
        let [loading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true)
            let ref = doc(db, colName, id);
            onSnapshot(ref, doc => {
                if (doc.exists()) {
                    let document = { id: doc.id, ...doc.data() };
                    setData(document)
                    setLoading(false)
                    setError('');
                } else {
                    setError('no document found')
                    setLoading(false)
                }
            })
        }, [id])

        return {error,loading,data};
    }

    let addCollection = async (colName,data) => {
        data.date = serverTimestamp();
        let ref = collection(db, colName);
        return addDoc(ref, data);
    }
    let deleteDocument = async(colName,id) => {
        let ref = doc(db, colName, id);
        return deleteDoc(ref); //backend delete
    }
    let updateDocument = async(colName,id,data) => {
        data.date = serverTimestamp();
        let ref = doc(db, colName, id);
        return updateDoc(ref, data);
    }


    return {getCollection,addCollection,deleteDocument,updateDocument,getDocument};
}
