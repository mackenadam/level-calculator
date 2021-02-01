import React from 'react'
import { connect } from 'react-redux'

class Ingredient extends React.Component {
  state = {
    currentIngredient: this.props.ingredients[this.props.id - 1]
  }

  render () {
    return (
      <>
        <tr>
          <td>{this.state.currentIngredient.name}</td>
          <td>{this.state.currentIngredient.energy}</td>
          <td>{this.state.currentIngredient.fat}</td>
          <td>{this.state.currentIngredient.carbohydrates}</td>
          <td>{this.state.currentIngredient.sugar}</td>
          <td>{this.state.currentIngredient.protein}</td>
          <td><button>x</button></td>
        </tr>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    ingredients: globalState.ingredients
  }
}

export default connect(mapStateToProps)(Ingredient)