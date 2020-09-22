import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ListRecipes from './components/ListRecipes/ListRecipes'
import IndexedDB from './data/IndexedDB';

function App() {
  const [recipeList, setRecipeList] = useState([])
  const [resquest, setResquest] = useState(true)
  if (recipeList == false){
    IndexedDB.table('recipe')
    .toArray()
    .then((list) => {
      setRecipeList(list)
    })
  }
  if (resquest === false){
    setResquest(true)
  }
  function handleAdd(recipeName, ingredients, instruction, imageURL) {
    const newRecipe = {
      recipeName,
      ingredients,
      instruction,
      imageURL
    };
    IndexedDB.table('recipe')
      .add(newRecipe)
      .then((id) => {
        const tempList = recipeList.push(Object.assign({}, newRecipe, id))
        setRecipeList(tempList)
        setResquest(false)
      });
  }

  function handleDelete(id) {
    IndexedDB.table('recipe')
      .delete(id)
      .then(() => {
        const tempList = recipeList.filter((recipe)=> recipe.id !== id)
        setRecipeList(tempList)
        setResquest(false)
      });
  }

  return (
    <div>
      <Header handleAdd={handleAdd}/>
      <ListRecipes recipeList={recipeList} handleDelete={handleDelete}/>
    </div>
  )
}
export default App;
