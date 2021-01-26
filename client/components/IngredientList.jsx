import React from 'react'
import { connect } from 'react-redux'

import Ingredient from './Ingredient'

class IngredientList extends React.Component {
  state = {}

  render () {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Cal</th>
            <th>Fat</th>
            <th>Carbs</th>
            <th>Sugar</th>
            <th>Protein</th>
          </tr>
          <Ingredient />
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
  return {}
}

export default connect(mapStateToProps)(IngredientList)