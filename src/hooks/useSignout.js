import {useState} from 'react'
import {  signOut } from 'firebase/auth'
import {auth} from '../firebase';

export default function useSignout() {

    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const logout = async () => {
        try {
            setLoading(true);
            let res = await signOut(auth)
            setError('');
            setLoading(false);
            return res.user;
        }catch(e) {
            setLoading(false);
            setError(e.message);
        }
    }

    return {error,loading,logout}
}
