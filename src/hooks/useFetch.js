import { useEffect, useState } from "react";

function useFetch(url) {
    let [data,setData] = useState(null);
    let [ loading, setLoading ] = useState(false);
    let [ error, setError ] = useState(null);

    useEffect(() => {
      setLoading(true);
        fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('something went wrong');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch(e => {
          setError(e.message);
        })
      },[url]);
    return { data , loading , error };
}

export default useFetch;