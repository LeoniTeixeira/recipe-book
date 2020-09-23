import React, { useState } from 'react';

import './Recipe.css'

function Recipe({id, recipeName, mealType, numberPeople, difficulty, ingredients, instructions, imageURL, handleDelete}) {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <>
            <div className="recipe">
                <h1 className="recipe-name">{recipeName}</h1>
                <p>{'Meal type: ' + mealType}</p>
                <p>{'Number of people it serves: ' + numberPeople}</p>
                <p>{'Difficulty: ' + difficulty}</p>
                <button  className="show-recipe-btn"onClick={()=>setIsOpen(!isOpen)}>Show</button>
            </div>
            { isOpen?
                <div className="blur">
                    <div className="modal">
                            <button className="modal-btn-close" onClick={()=>setIsOpen(!isOpen)}>Fechar</button>
                        <div className="modal-recipe-area">
                            <h1 className="recipe-name">{recipeName}</h1>
                            <p>{'Meal type: ' + mealType}</p>
                            <p>{'Number of people it serves: ' + numberPeople}</p>
                            <p>{'Difficulty: ' + difficulty}</p>
                            <h3>Ingredients List</h3>
                            <p>{ingredients}</p>
                            <h3>Instructions</h3>
                            <p>{instructions}</p> 
                        </div>  
                        <button className="delete-btn" onClick={()=>handleDelete(id)}>Delete</button> 
                        
                        <img className="recipe-image" src={imageURL}/>
                        
                    </div>
                </div>
            :
                <div className="display-none"/>
            }
        </>
    )
}

export default Recipe;