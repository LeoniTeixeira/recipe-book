import React, { useState } from 'react';

// import { Container } from './styles';
import './Modal.css';

function Modal({handleAdd}) {
    const [ isOpen, setIsOpen ] = useState(false)

    const [ description, setDescription ] = useState('')

    const addTarefa = () => {
        handleAdd(description)
        setDescription('')
    }

    const listenDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen) }>
                New Recipe
            </button>
            { isOpen ?
                <div className="blur">
                    <div className="modal">
                        <button onClick={() => setIsOpen(!isOpen)}
                                className="modal-btn">
                            Fechar
                        </button>
                        <input className="modal-input" onChange={listenDescription} value={description} type="text"/>
                        <button onClick={addTarefa}>Add Recipe</button>
                    </div>  
                </div>
                :
                <div/>
            }
        </>
    )
}

export default Modal;