import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Recipes from './components/Organisms/Recipes/Recipes.jsx'
import AddIngredient from './components/Organisms/Ingredients/AddIngredient.jsx'
import MyIngredients from './components/Organisms/Ingredients/MyIngredients.jsx'

class App extends Component {
  state = {
    recipes: [
      {
        title: "Pancakes",
        ingredients: ['milk','eggs','butter']
      },
      {
        title: "Pancakes",
        ingredients: ['milk','eggs','butter']
      },
      {
        title: "Pancakes",
        ingredients: ['milk','eggs','butter']
      }
    ],
    ingredients: [
      'milk','eggs','butter','apple','orange', 'onion', 'asparagus', 'baking-powder', 'broccoli', 'chocolate', 'coconut-milk', 'coffee', 'creme-fraiche', 'eggs', 'flour', 'lettuce', 'lime', 'mushrooms', 'pepper', 'prawn', 'sugar', 'tomatoes', 'vanilla', 'water'
    ],
    myIngredients: [
      {
        name: 'milk',
        amount: 2,
        unit: 'ml'
      },
      {
        name: 'eggs',
        amount: 3,
        unit: 'pieces'
      },
      {
        name: 'butter',
        amount: 20,
        unit: 'gram'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Recipe App</h2>
        </div>
        <AddIngredient ingredients={this.state.ingredients} />
        <MyIngredients myIngredients={this.state.myIngredients} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
