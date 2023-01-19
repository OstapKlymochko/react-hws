import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Flight} from "../Flight/Flight";
import '../Flight/Main.css'

const Flights = () => {
    let [flights,setFlights] = useState([]);
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/').then(value=> value.data).then(val => setFlights([...val]))},[]);
    return (
        <div className={'container'}>
            {
                flights.filter(value => value.launch_year !== '2020').map(flight => <Flight key={flight.flight_number}
                    name={flight.mission_name} year={flight.launch_year} patch={flight.links.mission_patch_small}/>)
            }
        </div>
    );
};

export {Flights};