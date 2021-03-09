import React from 'react'
import { connect } from 'react-redux'

import IngredientAdd from './IngredientAdd'
import IngredientList from './IngredientList'
import Login from './Login'
import RecipeList from './RecipeList'
import Register from './Register'

import { checkToken } from '../actions'

export class App extends React.Component {
  componentDidMount () {
    if (window.localStorage.token) {
      this.props.dispatch(checkToken(window.localStorage.token))
    }
  }

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

export default connect()(App)
