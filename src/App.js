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
      {"name":"milk","amount":null,"unit":"pieces"},
      {"name":"eggs","amount":null,"unit":"pieces"},
      {"name":"butter","amount":null,"unit":"pieces"},
      {"name":"apple","amount":null,"unit":"pieces"},
      {"name":"orange","amount":null,"unit":"pieces"},
      {"name":"onion","amount":null,"unit":"pieces"},
      {"name":"asparagus","amount":null,"unit":"pieces"},
      {"name":"baking-powder","amount":null,"unit":"pieces"},
      {"name":"broccoli","amount":null,"unit":"pieces"},
      {"name":"chocolate","amount":null,"unit":"pieces"},
      {"name":"coconut-milk","amount":null,"unit":"pieces"},
      {"name":"coffee","amount":null,"unit":"pieces"},
      {"name":"creme-fraiche","amount":null,"unit":"pieces"},
      {"name":"eggs","amount":null,"unit":"pieces"},
      {"name":"flour","amount":null,"unit":"pieces"},
      {"name":"lettuce","amount":null,"unit":"pieces"},
      {"name":"lime","amount":null,"unit":"pieces"},
      {"name":"mushrooms","amount":null,"unit":"pieces"},
      {"name":"pepper","amount":null,"unit":"pieces"},
      {"name":"prawn","amount":null,"unit":"pieces"},
      {"name":"sugar","amount":null,"unit":"pieces"},
      {"name":"tomatoes","amount":null,"unit":"pieces"},
      {"name":"vanilla","amount":null,"unit":"pieces"},
      {"name":"water","amount":null,"unit":"pieces"}],
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
