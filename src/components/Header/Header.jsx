import React from 'react';
import Modal from '../Modal/Modal';
import './Header.css';

function Header({handleAdd}) {
    return(
        <div className="header">
            <h1 className="logo">
                RecipeBook
            </h1>
            <Modal handleAdd={handleAdd}/>
        </div>
    )
}

export default Header;