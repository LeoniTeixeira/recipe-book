import React from 'react';

// import { Container } from './styles';

function Input({label, setItem, item}) {
    const handleListen = (e) => {
        setItem(e.target.value)
    }
    
    return (
        <div>
            <label htmlFor={label} >{label}</label>
            <input id={label} className="modal-input" onChange={handleListen} value={item} type="text"/>
        </div>
    )
}

export default Input;