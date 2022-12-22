import React from 'react'
import './style.css'

/*

💪 Exercise: Create a reusable component with props

Here's an app that provides information about different animals. However, the code is starting to look repetitive.

🎯 Your task:
- Reduce the repetition in the code below by creating a reusable component called AnimalCard.
- The AnimalCard component should accept the following props:
  - symbol
  - name
  - classification

*/

export default function App() {
  return (
    <main>
      <h1>Welcome to AnimalDB!</h1>

      <div className="animal-card">
        <div className="symbol">🐶</div>
        <h2>Dog</h2>
        <p>
          <b>Classification:</b> Mammal
        </p>
      </div>

      <div className="animal-card">
        <div className="symbol">🐸</div>
        <h2>Frog</h2>
        <p>
          <b>Classification:</b> Amphibian
        </p>
      </div>

      <div className="animal-card">
        <div className="symbol">🦖</div>
        <h2>Tyrannosaurus Rex</h2>
        <p>
          <b>Classification:</b> Reptile
        </p>
      </div>
    </main>
  )
}
