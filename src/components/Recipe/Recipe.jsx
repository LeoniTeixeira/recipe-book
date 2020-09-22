import React from 'react';

// import { Container } from './styles';

function Recipe({id, recipeName, ingredients, instruction, imageURL, handleDelete}) {
    return (
        <div>
            <h1>{recipeName}</h1>
            <p>{ingredients}</p>
            <p>{instruction}</p>
            <button onClick={handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Recipe;