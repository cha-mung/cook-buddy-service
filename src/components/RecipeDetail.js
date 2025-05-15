// src/components/RecipeDetail.js
import React from 'react';

export default function RecipeDetail({ recipe }) {
  if (!recipe) return null;

  return (
    <div>
      <h3>{recipe.id}</h3>
      <p><strong>필수 재료:</strong> {recipe.mainIngredients.join(', ')}</p>
      <p><strong>선택 재료:</strong> {recipe.optionalIngredients.join(', ')}</p>
      <p><strong>조리 시간:</strong> {recipe.time}분</p>
      <p><strong>난이도:</strong> {recipe.difficulty}</p>
      <h4>조리 순서</h4>
      <ol>
        {recipe.steps.map((step, i) => <p key={i}>{step}</p>)}
      </ol>
    </div>
  );
}
