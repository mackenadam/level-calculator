import React from 'react'
import { connect } from 'react-redux'

import { fetchIngredients } from '../actions'

import Ingredient from './Ingredient'

class IngredientList extends React.Component {
  state = {
    ingredients: []
  }

  componentDidMount () {
    this.props.dispatch(fetchIngredients())
  }

  render () {
    return (
      <div>
        <h1 className='section-header'>Saved Ingredients</h1>
        <table className='full-width'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cal</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Sugar</th>
              <th>Protein</th>
            </tr> 
          </thead>
          <tbody>
            {
            this.props.ingredients.map(ingredient => {
              return <Ingredient key={ingredient.id} ingredient={ingredient} />
            })
            }
          <tr>
            <td className='table-spacer'></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

function mapStateToProps (globalState) {
  return {
    ingredients: globalState.ingredients
  }
}

export default connect(mapStateToProps)(IngredientList)