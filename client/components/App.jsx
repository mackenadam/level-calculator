import React from 'react'

import IngredientAdd from './IngredientAdd'
import IngredientList from './IngredientList'
import { Login } from './Login'
import RecipeList from './RecipeList'
import { Register } from './Register'

export class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Login />
        <Register />
        <RecipeList />
        <IngredientList />
        <IngredientAdd />
      </div>
    )
  }
}

export default App
