// src/App.js
import React, { useState, useEffect } from 'react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { recommendRecipes } from './util/recommend';
import recipes from './data/recipes.json';
import './App.css';

function App() {
  const [fridge, setFridge] = useState([]);
  const [groupedRecipes, setGroupedRecipes] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (fridge.length > 0) {
      const result = recommendRecipes(fridge, recipes);
      setGroupedRecipes(result);
    } else {
      setGroupedRecipes({});
    }
  }, [fridge]);

  return (
    <div className="app">
      <h1>🥕 냉털 레시피 추천기</h1>
      <IngredientInput ingredients={fridge} onUpdate={setFridge} />
      <p>🧊 냉장고 속 재료: {fridge.join(', ')}</p>
      <RecipeList groupedRecipes={groupedRecipes} onSelect={setSelectedRecipe} />
      <RecipeDetail recipe={selectedRecipe} />
    </div>
  );
}

export default App;
