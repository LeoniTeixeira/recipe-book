import React, { useState } from 'react';
import Input from '../InputArea/Input';

// import { Container } from './styles';
import './Modal.css';

function Modal({handleAdd}) {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ recipeName, setRecipeName ] = useState('')
    const [ mealType, setMealType ] = useState('') 
    const [ numberPeople, setNumberPeople ] = useState('') 
    const [ difficulty, setDifficulty ] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ instructions, setInstructions ] = useState('')
    const [ imageURL, setImageURL ] = useState('')

    const addTarefa = () => {
    handleAdd(recipeName, mealType, numberPeople, difficulty, ingredients, instructions, imageURL)
        setRecipeName('')
        setIngredients('')
        setInstructions('')
        setImageURL('')
        setIsOpen(false)
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
                            <Input label={'Image URL'} setItem={setImageURL} Item={imageURL}/>
                        </div>
                        <div className="modal-input-area">
                            <Input label={'Recipe Name'} setItem={setRecipeName} Item={recipeName}/>
                            <Input label={'Meal Type'} setItem={setMealType} Item={mealType}/>
                            <Input label={'Number of people it serves'} setItem={setNumberPeople} Item={numberPeople}/>
                            <Input label={'Difficulty Level'} setItem={setDifficulty} Item={difficulty}/>
                            <Input label={'Ingredients'} setItem={setIngredients} Item={ingredients}/>
                            <Input label={'Instructions'} setItem={setInstructions} Item={instructions}/>
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