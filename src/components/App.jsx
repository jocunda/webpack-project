import "../styles/index.scss"
import Recipes from "./Recipes"
import sushi from "../images/sushi.jpg"

const App = () => {
    return <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Hi, React, how are you</h1>
            </section>
            <img src={sushi} alt="sushi" width="250" />
            <Recipes />
        </main>

    </>
}

export default App