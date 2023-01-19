import React from 'react';

const Flight = ({name,year,patch}) => {
    return (
        <div className={'flight'}>
            <h2>{name} {year}</h2>
            <img src={patch} alt={name}/>
        </div>
    );
};

export {Flight};