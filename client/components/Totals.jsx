import React from 'react'
import { connect } from 'react-redux'

class Totals extends React.Component {

  sumValues = (value) => {
    let total = 0
    let weight = 0
    if (this.props.recipe.length === 0) {
      return 0
    } else if (this.props.recipe.length === 1) {
      if (this.props.recipe[0][value] === 0 || this.props.recipe[0].weight === 0) {
        return 0
      } else {
        return (this.props.recipe[0][value] / this.props.recipe[0].weight).toFixed(1)
      }
    } else {
      if (this.props.recipe[0][value] === 0 && this.props.recipe[0].weight === 0) {
        return 0
      } else {
        this.props.recipe.map(ingredient => {
          total = ingredient[value] + total
          weight = (ingredient.weight + weight)
        })
        weight = weight / 100
        return (total / weight).toFixed(1)
      }
    } 
  }

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
          <th>Per 100g</th>
        </tr>
        <tr>
          <th>Total</th>
          <td>{this.sumValues('energy')}</td>
          <td>{this.sumValues('fat')}</td>
          <td>{this.sumValues('carbohydrates')}</td>
          <td>{this.sumValues('sugar')}</td>
          <td>{this.sumValues('protein')}</td>
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