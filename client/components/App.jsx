import React from 'react'

import IngredientAdd from './IngredientAdd'
import IngredientList from './IngredientList'
import { Login } from './Login'
import RecipeList from './RecipeList'

export class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Login />
        <RecipeList />
        <IngredientList />
        <IngredientAdd />
      </div>
    )
  }
}

export default App
