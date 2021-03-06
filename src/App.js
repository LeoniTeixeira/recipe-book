import React, { useState } from 'react';
import Header from './components/Header/Header';
import ListRecipes from './components/ListRecipes/ListRecipes'
import IndexedDB from './data/IndexedDB';
import './App.css'

function App() {
  const [recipeList, setRecipeList] = useState([])
  const [request, setRequest] = useState(false)

  if (request === false){
    IndexedDB.table('recipe')
    .toArray()
    .then((list) => {
      setRecipeList(list)
      setRequest(true)
    })
  }
  function handleAdd(recipeName, mealType, numberPeople,
     difficulty, ingredients, instructions, imageURL) {
    const newRecipe = {
      recipeName,
      mealType, 
      numberPeople, 
      difficulty, 
      ingredients, 
      instructions, 
      imageURL
    };
    IndexedDB.table('recipe')
      .add(newRecipe)
      .then((id) => {
        const tempList = recipeList
        tempList.push(Object.assign({}, newRecipe, id))
        setRecipeList(tempList)
        setRequest(false)
      });
  }

  function handleDelete(id) {
    IndexedDB.table('recipe')
      .delete(id)
      .then(() => {
        const tempList = recipeList
        tempList.filter((recipe)=>recipe.id !== id)
        setRecipeList(tempList)
        setRequest(false)
      });
  }

  return (
    <div>
      <Header handleAdd={handleAdd}/>
      <ListRecipes 
                  recipeList={recipeList} 
                  handleDelete={handleDelete}
      />
    </div>
  )
}
export default App;
