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
        <table>
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
            this.props.ingredients.map(item => {
              return <Ingredient key={item.id} id={item.id} />
            })
            }
          </tbody>
        </table>

        <div>
          <select name="" id="">
            
            <option value="The sausages">The sausages</option>
            <option value="The beans">The beans</option>
            <option value="Something else">Something else</option>
          </select>
          <button>Select ingredient</button>
        </div>
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