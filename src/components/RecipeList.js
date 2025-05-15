// src/components/RecipeList.js
import React from 'react';

export default function RecipeList({ groupedRecipes, onSelect }) {
  const types = Object.keys(groupedRecipes);

  return (
    <div>
      <h3>🥘 추천 레시피</h3>
      {types.length === 0 && <p>조건에 맞는 레시피가 없어요 🥲</p>}
      {types.map(type => (
        <div key={type}>
          <h4>{type}</h4>
          <ul>
            {groupedRecipes[type].map(recipe => (
              <li key={recipe.id} onClick={() => onSelect(recipe)}>
                {recipe.id} (우선순위: {recipe.score})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
