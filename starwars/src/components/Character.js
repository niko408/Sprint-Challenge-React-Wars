// Write your Character component here
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function getCharacter(id) {
    const [character, setCharacter] = useState('')
        useEffect(() => {
            const fetchCharacter = (id) => 
            fetch(`https://swapi.dev/api/people/${id}/`)
                .then(response => response.json())
                .then(id => {
                    console.log(id);
                    setCharacter(id.name);
                });
            fetchCharacter(id);
    }, [id])
    return character;
}

function Character({ id }){
    const character = getCharacter(id)
    
    return (
        <div className = 'character'>
            <div>{id}</div>
        </div>
    );
}