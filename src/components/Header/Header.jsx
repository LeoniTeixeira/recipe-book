import React from 'react';
import Modal from '../Modal/Modal';

function Header({handleAdd}) {
    return(
        <div>
            <h1>
                RecipeBook
            </h1>
            <Modal handleAdd={handleAdd}/>
        </div>
    )
}

export default Header;