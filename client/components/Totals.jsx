import React from 'react'
import { connect } from 'react-redux'

class Totals extends React.Component {
  sumValuePer100g = (value) => {
    let recipeArray = this.props.recipe
    let totalValue = 0
    let totalWeight = 0

    if (recipeArray.length > 0) {
      recipeArray.map(ingredient => {
        totalValue = ingredient[value] + totalValue
        totalWeight = ingredient.weight + totalWeight
      })
      let hundreds = totalWeight / 100
      if (hundreds === 0) {
        return 0
      } else {
        return (totalValue / hundreds).toFixed(1)
      }
    } else {
      return 0
    }
  }

  sumValue = (value) => {
    let totalValue = 0
    this.props.recipe.map(ingredient => {
      totalValue = ingredient[value] + totalValue
    })
    return totalValue
  }

  render () {
    return (
      <tfoot>
        <tr>
          <td className='table-spacer'></td>
        </tr>
        <tr>
          <th></th>
          <th>Total weight</th>
          <th>Total Cal</th>
          <th>Fat/100g</th>
          <th>Carbs/100g</th>
          <th>Sugar/100g</th>
          <th>Protein/100g</th>
        </tr>
        <tr>
          <th>Total</th>
          <td>{this.sumValue('weight')}</td>
          <td>{this.sumValue('energy')}</td>
          <td>{this.sumValuePer100g('fat')}</td>
          <td>{this.sumValuePer100g('carbohydrates')}</td>
          <td>{this.sumValuePer100g('sugar')}</td>
          <td>{this.sumValuePer100g('protein')}</td>
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