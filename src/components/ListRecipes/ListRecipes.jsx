import React from 'react';
import Recipe from '../Recipe/Recipe';
import './ListRecipes.css'

function ListRecipes({recipeList,handleDelete}) {
    return (
        <div className="recipe-area">
            {recipeList.map((recipe) => <Recipe id={recipe.id} {...recipe} handleDelete={handleDelete} />)}
        </div>
    )
}

export default ListRecipes;