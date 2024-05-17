import RecipeDetails from "@/components/ui/recipe-details";
import React from "react";

const fetchdetailslist = async (id) => {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const Details = async ({ params }) => {
  const detailist = await fetchdetailslist(params?.details);

  return (
    <div>
      <RecipeDetails getRecipeDetails={detailist}/>
    </div>
  );
};

export default Details;
