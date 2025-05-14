// src/components/RecipeDetail.js
import React from 'react';

export default function RecipeDetail({ recipe }) {
  if (!recipe) return null;
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p><strong>재료:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>조리 순서:</strong></p>
      <ol>
        {recipe.steps.map((s, i) => <p key={i}>{s}</p>)}
      </ol>
    </div>
  );
}
