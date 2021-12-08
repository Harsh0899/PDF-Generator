import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not Recieve data from endpoint");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [url])
    return data;
}

export default useFetch;