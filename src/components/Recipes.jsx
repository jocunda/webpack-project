import { useState } from "react"

const tomatoRecipe = {
    tomato: 5,
    water: 8,
    salt: 2,
}

const catRecipe = {
    ...tomatoRecipe,
    fries: 2,
    coke: 1,
}

console.log(tomatoRecipe)
console.log(catRecipe)

const Recipes = () => {
    const [recipes, setRecipes] = useState({})
    return <>
        <div>
            <h3>Current Recipes:</h3>
            <button onClick={() => setRecipes(tomatoRecipe)}>tomatoRecipe</button>
            <button onClick={() => setRecipes(catRecipe)}>catRecipe</button>
            <ul>
                {Object.keys(recipes).map((material) => (
                    <li key={material}>
                        {material}:{recipes[material]}
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default Recipes