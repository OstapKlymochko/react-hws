import React from 'react';

const GetChar = (props) => {
    let {item:{id,name,status,species,gender,image}} = props
    return (
        <div>
            {id}. {name}. Status: {status}. Species: {species}. Gender: {gender}.
            <img src={image} alt="character"/>
        </div>
    );
};

export {GetChar};