import React from 'react'
import { connect } from 'react-redux'

class Totals extends React.Component {
  sumValues = (value) => {
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

  sumWeight = () => {
    let totalWeight = 0
    this.props.recipe.map(ingredient => {
      totalWeight = ingredient.weight + totalWeight
    })
    return totalWeight
  }

  render () {
    return (
      <tfoot>
        <tr>
          <td className='table-spacer'></td>
        </tr>
        <tr>
          <th>Per 100g</th>
          <th>Total weight</th>
          <th>Cal</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Sugar</th>
          <th>Protein</th>
        </tr>
        <tr>
          <th>Total</th>
          <td>{this.sumWeight()}</td>
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