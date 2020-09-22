import React, { useState } from 'react';

// import { Container } from './styles';
import './Modal.css';

function Modal({handleAdd}) {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ recipeName, setRecipeName ] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ instructions, setInstructions ] = useState('')
    const [ imageURL, setImageURL ] = useState('')
    const addTarefa = () => {
        handleAdd(recipeName, ingredients, instructions, imageURL)
        setRecipeName('')
        setIngredients('')
        setInstructions('')
        setImageURL('')
        setIsOpen(false)
    }
    const listenRecipeName = (e) => {
        setRecipeName(e.target.value)
    }
    const listenIngredients = (e) => {
        setIngredients(e.target.value)
    }
    const listenInstructions = (e) => {
        setInstructions(e.target.value)
    }
    const listenImageURL = (e) => {
        setImageURL(e.target.value)
    }
    return (
        <>
            <button className="modal-btn" onClick={() => setIsOpen(!isOpen) }>
                New Recipe
            </button>
            { isOpen ?
                <div className="blur">
                    <div className="modal">
                        <button className="modal-btn-close" onClick={() => setIsOpen(!isOpen)}>
                            Fechar
                        </button>
                        <div className="modal-image-area">
                            <label htmlFor="imageURL" >Image URL</label>
                            <input id="imageURL" className="modal-input" onChange={listenImageURL} value={imageURL} type="text"/>
                        </div>
                        <div className="modal-input-area">
                            <label htmlFor="recipeName" > Recipe Name</label>
                            <input id="recipeName" className="modal-input" onChange={listenRecipeName} value={recipeName} type="text"/>
                            <label htmlFor="ingredients" >Ingredients</label>
                            <input id="ingredients" className="modal-input" onChange={listenIngredients} value={ingredients} type="text"/>
                            <label htmlFor="instructions" >Instructions</label>
                            <input id="instructions" className="modal-input" onChange={listenInstructions} value={instructions} type="text"/>
                            <button className="modal-input-btn" onClick={addTarefa}>Add Recipe</button>
                        </div>
                    </div>  
                </div>
                :
                <div className="display-none"/>
            }
        </>
    )
}
export default Modal;