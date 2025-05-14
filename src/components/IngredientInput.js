// src/components/IngredientInput.js
import React, { useState } from 'react';

export default function IngredientInput({ onUpdate }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed) {
      onUpdate((prev) => [...new Set([...prev, trimmed])]);
      setInput('');
    }
  };

  return (
    <div>
      <h3>냉장고에 있는 재료를 입력하세요</h3>
      <input
        type="text"
        placeholder="예: 계란"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}
