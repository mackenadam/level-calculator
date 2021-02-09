import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

import IngredientList from './IngredientList'
import RecipeList from './RecipeList'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <div className='app'>
        <RecipeList />
        <IngredientList />
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
