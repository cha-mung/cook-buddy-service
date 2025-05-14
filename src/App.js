// src/App.js
import React, { useState, useEffect } from 'react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import recipes from './data/recipes.json';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [matchedRecipes, setMatchedRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (ingredients.length > 0) {
      const matched = recipes
        .map((r) => {
          // 주요 재료가 모두 포함되어 있는지 확인
          const hasAllMain = r.mainIngredients.every((mainIng) =>
            ingredients.includes(mainIng)
          );
  
          if (!hasAllMain) {
            return null; // 필터에서 제외될 항목
          }
  
          // 일반 재료 중 몇 개 겹치는지 계산 (보조 점수)
          const subMatches = r.ingredients.filter((ing) =>
            ingredients.includes(ing)
          ).length;
  
          return { ...r, score: subMatches }; // 일반 재료 개수만 점수로 사용
        })
        .filter((r) => r !== null) // 제외된 레시피 제거
        .sort((a, b) => b.score - a.score); // 보조 점수로 정렬
  
      setMatchedRecipes(matched);
    } else {
      setMatchedRecipes([]);
    }
  }, [ingredients]);
  
  
  return (
    <div className="app">
      <h1>🧊 냉털 레시피 추천</h1>
      <IngredientInput onUpdate={setIngredients} />
      <p>입력된 재료: {ingredients.join(', ')}</p>
      <RecipeList recipes={matchedRecipes} onSelect={setSelectedRecipe} />
      <RecipeDetail recipe={selectedRecipe} />
    </div>
  );
}

export default App;
