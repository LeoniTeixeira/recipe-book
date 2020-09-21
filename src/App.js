import React, { useState } from 'react';
import Header from './components/Header/Header';

import IndexedDB from './data/IndexedDB';



function App() {
  const [recipeList, setRecipeList] = useState([])

  function handleAdd(description) {
    const newRecipe = {
      description,
    };
    IndexedDB.table('recipe')
      .add(newRecipe)
      .then((id) => {
    });
}
  return (
    <div>
      <Header handleAdd={handleAdd}/>
    </div>
  )
}

export default App;
