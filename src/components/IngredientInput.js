// src/components/IngredientInput.js
import React, { useState } from 'react';

export default function IngredientInput({ ingredients, onUpdate }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      onUpdate([...ingredients, trimmed]);
      setInput('');
    }
  };

  const handleRemove = (item) => {
    onUpdate(ingredients.filter(i => i !== item));
  };

  return (
    <div>
      <h3>냉장고 재료 입력</h3>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="예: 계란"
      />
      <button onClick={handleAdd}>추가</button>

      <div className="refrigerator-list">
        {ingredients.map((item, idx) => (
          <span
            key={idx}
            className="refrigerator-item"
            onClick={() => handleRemove(item)}
            title="클릭해서 삭제"
          >
            ❌ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
