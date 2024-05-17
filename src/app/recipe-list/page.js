import RecipeList from "@/components/ui/recipe-list";
import React from "react";

const fetchRecipeDetails = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const result = await apiResponse.json();
    return result?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipe = async () => {
  const recipelist = await fetchRecipeDetails();
  console.log(recipelist);
  return (
    <div>
      <RecipeList recipe={recipelist} />
    </div>
  );
};

export default Recipe;
