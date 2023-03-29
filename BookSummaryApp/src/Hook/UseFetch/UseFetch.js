import axios from "axios";
import { useState, useEffect} from "react";

function UseFetch(url) {
    const [ data, setData ] = useState();
    const fetchData =async ()=> {
        try {
            const {data} = await axios.get(url)
            setData(data)
            console.log(responseData)
        } catch (error) {
            console.log (error)
        }
    }
    useEffect (()=> {fetchData()}, []) 
    return {data};
}

export default UseFetch;