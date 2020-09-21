import React from 'react';

function Header({handleAdd}) {

    function addTarefa() {
        handleAdd('teste')
    }

    return(
        <div>
            <h1>
                RecipeBook
            </h1>
            <button onClick={addTarefa}>
                New Recipe
            </button>
        </div>
    )
}

export default Header;