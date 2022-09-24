import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArr = [...foods, newFood];
    setFoods(newFoodArr);
    return (<select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
    </select>);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  function handleLiClick(id) {
    // const newFoodArr = foods.filter((food) => food.id !== id)
    const newFoodArr = foods.map((food) => {
      if(food.id === id) {
      return {
          ...foods, 
          heatLevel: food.heatLevel +1.
      };
    } else {
      return food;
    }
    })
    setFoods(newFoodArr)
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)} >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>

  );
}

export default SpicyFoodList;
Footer