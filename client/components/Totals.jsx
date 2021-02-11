import React from 'react'
import { connect } from 'react-redux'

class Totals extends React.Component {
  render () {
    return (
      <tfoot>
        <tr>
          <td></td>
          <th>Cal</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Sugar</th>
          <th>Protein</th>
        </tr>
        <tr>
          <th>Totals</th>
          <td>Cal</td>
          <td>Fat</td>
          <td>Carbs</td>
          <td>Sugar</td>
          <td>Protein</td>
        </tr>
      </tfoot>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    recipe: globalState.recipe
  }
}

export default connect(mapStateToProps)(Totals)