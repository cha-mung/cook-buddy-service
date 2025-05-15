// src/utils/recommend.js

export function recommendRecipes(fridge, recipes) {
  const filtered = recipes
    .filter(r =>
      r.mainIngredients.every(m => fridge.includes(m))
    )
    .map(r => {
      const score = r.optionalIngredients.filter(o => fridge.includes(o)).length;
      return { ...r, score };
    })
    .sort((a, b) => b.score - a.score);

  const grouped = {};
  for (const r of filtered) {
    const type = r.type || "기타";
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(r);
  }

  return grouped;
}
