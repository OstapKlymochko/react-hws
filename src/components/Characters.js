import React, {useEffect, useState} from 'react';
import {GetChar} from "./getChar";
import './Main.css'

const Characters = () => {

    let [char, setChar] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character').then(resp => resp.json()).then(val => {
            setChar(val.results);
        })
    }, []);

    return (
        <ul>
            {
                char.filter(val => val.id < 7).map(val => <li>
                  <GetChar item={val}/>
                </li>)
            }
        </ul>
    )
}
export {Characters};
