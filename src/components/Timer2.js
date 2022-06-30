// rfc creates react component automatically

import React, { useEffect, useState } from 'react'

export default function Timer2() {

    const [time, setTime] = useState(0); // actual state of time and a function we can set the state of time with
    const [countryName, setCountryName] = useState('');
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://restcountries.com/v3.1/name/hungary`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setLoading(false)
        })
    }, []);

    //useEffect for time
    useEffect(() => {
        console.log('time changed');

        return () => {

        };

    }, [time]);

    //useEffect for country
    useEffect(()=>{
        async function fetchData() {
            let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const data = await response.json();

            setCountry(data[0].name.nativeName[data[0].cca3.toLowerCase()].common)
        }

        if (countryName !== '') {
            fetchData();
        }

    }, [countryName]);

    return (
        loading ? <div>loading...</div> : 
        <>
            <div>
                {time}
            </div>

            <input type="text" onChange={(event) => {setCountryName(event.target.value)}}></input>

            {/*
            <button onClick={() => { incrementTimer() }}
            >Click me</button>
            */}

            <button onClick={ () => {setTime(time+1)} }>Click me</button>

            <div>{country}</div>
        </>
    )
}
