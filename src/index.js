import "./styles/index.scss"

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