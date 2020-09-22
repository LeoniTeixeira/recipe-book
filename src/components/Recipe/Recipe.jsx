import React, { useState } from 'react';

import './Recipe.css'

function Recipe({id, recipeName, ingredients, instruction, imageURL, handleDelete}) {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <>
            <div className="recipe">
                <h1 className="recipe-name">{recipeName}</h1>
                <button  className="show-recipe-btn"onClick={()=>setIsOpen(!isOpen)}>Show</button>
                {/* <button onClick={()=>handleDelete(id)}>Delete</button> */}
            </div>
            { isOpen?
                <div className="blur">
                    <div className="modal">
                            <button className="modal-btn-close" onClick={()=>setIsOpen(!isOpen)}>Fechar</button>
                        <div className="modal-recipe-area">
                            <h1>{recipeName}</h1>
                            <h3>ingredients</h3>
                            <p>{ingredients}</p>
                            <h3>instruction</h3>
                            <p>{instruction}</p> 
                        </div>  
                        <button className="delete-btn" onClick={()=>handleDelete(id)}>Delete</button> 
                    </div>
                </div>
            :
                <div className="display-none"/>
            }
        </>
    )
}

export default Recipe;