import React from 'react'
import { connect } from 'react-redux'

import { destroyIngredient, updateIngredient } from '../actions'

class Ingredient extends React.Component {
  state = {
    currentIngredient: this.props.ingredient
  }

  handleDelete = () => {
    this.props.dispatch(destroyIngredient(this.props.ingredient.id))
  }

  handleEdit = () => {
    this.props.dispatch(updateIngredient(this.props.ingredient.id))
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
          <td><button onClick={this.handleEdit}>Edit</button></td>
          <td><button onClick={this.handleDelete}>x</button></td>
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