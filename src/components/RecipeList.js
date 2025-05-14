// src/components/RecipeList.js
import React from 'react';

export default function RecipeList({ recipes, onSelect }) {
  return (
    <div>
      <h3>추천 레시피</h3>
      {recipes.length === 0 ? (
        <p>해당 재료로 만들 수 있는 레시피가 없어요 🥲</p>
      ) : (
        <ul>
          {recipes.map((r) => (
            <li key={r.id} onClick={() => onSelect(r)}>
              {r.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
