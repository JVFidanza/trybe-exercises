  const ingredientsList = Object.fromEntries(Object.keys(detailsData).filter(
      (key) => (key.includes('strIngredient') && detailsData[key]),
    ).map((ingredient) => [detailsData[ingredient], localStorageIngredients.includes(detailsData[ingredient])]));
