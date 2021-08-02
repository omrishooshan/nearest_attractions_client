import {useState,useEffect} from 'react'
import { useSelector} from 'react-redux';


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const geolocation = useSelector((state) => state);
    const _url=`${url}${geolocation.latitude}/${geolocation.longitude}`

    useEffect(() => {
        if (geolocation.latitude===null || geolocation.longitude===null ) return ;
     
        const fetchData = async () => {
    
            const response = await fetch(_url);
            const data = await response.json();
            setData(data.data);
            
        };

        fetchData();
    }, []);

    return { data };
};

export default useFetch