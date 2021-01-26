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
      </div>
    )
  }

}

function mapStateToProps (globalState) {
  return {}
}

export default connect(mapStateToProps)(IngredientList)