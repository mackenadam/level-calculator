import React from 'react'
import { connect } from 'react-redux'

class Ingredient extends React.Component {
  state = {
    ingredient: this.props.ingredients[this.props.id - 1]
  }

  render () {
    return (
      <>
        <tr>
          <td>{this.state.ingredient.name}</td>
          <td>{this.state.ingredient.energy}</td>
          <td>{this.state.ingredient.fat}</td>
          <td>{this.state.ingredient.carbohydrates}</td>
          <td>{this.state.ingredient.sugar}</td>
          <td>{this.state.ingredient.protein}</td>
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