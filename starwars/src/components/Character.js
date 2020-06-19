// // Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharDiv = styled.div`
    width: 50%;
    margin: 5% auto;
    `;

const CharText = styled.p`
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center;
    margin: 5%;
    font-size: 2rem;
    `;

const Character = props => {
    const {charProps} = props;
    return (
        <div>
            <CharDiv>
                    {charProps.map((charProps, index) => (
                        <CharText key={index}>{charProps.name} weighs {charProps.mass} kg.</CharText>
                    ))}
            </CharDiv>
        </div>
    )
}

export default Character;