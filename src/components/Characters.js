import React, {useEffect, useState} from 'react';
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
                    <div>
                        {val.id}. {val.name} {val.status} {val.species} {val.gender}
                        <img src={val.image} alt="character"/>
                    </div>
                </li>)
            }
        </ul>
    )
}
export {Characters};
