import React from 'react';
import Recipe from '../Recipe/Recipe';

function ListRecipes({recipeList, handleDelete}) {
    return (
        <div>
            {recipeList.map((recipe) => <Recipe id={recipe.id} {...recipe} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default ListRecipes;