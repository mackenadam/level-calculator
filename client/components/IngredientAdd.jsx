import React from 'react'
import { connect } from 'react-redux'

import { insertIngredient } from '../actions'

class IngredientAdd extends React.Component {
  state = {
    newIngredient: {
      name: null,
      energy: null,
      fat: null,
      carbohydrates: null,
      sugar: null,
      protein: null
    }
  }

  handleChange = (event) => {
    this.setState({
      newIngredient: {
        ...this.state.newIngredient,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    const isCompleted = Object.values(this.state.newIngredient).every(input => input !== null)
    if (isCompleted) {
      this.props.dispatch(insertIngredient(this.state.newIngredient))
    } else {
      alert('You forgot to fill out an input. Make sure all fields are completed and try again.')
    }
  }

  render () {
    return (
      <tfoot>
        <tr>
          <th>Add a new ingredient</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Cal</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Sugar</th>
          <th>Protein</th>
        </tr>
        <tr>
          <td>
            <input type="text" name="name" onChange={this.handleChange} />
          </td>
          <td>
            <input type="number" name="energy" onChange={this.handleChange} step="0.1" min="0" />
          </td>
          <td>
            <input type="number" name="fat" onChange={this.handleChange} step="0.1" min="0" />
          </td>
          <td>
            <input type="number" name="carbohydrates" onChange={this.handleChange} step="0.1" min="0" />
          </td>
          <td>
            <input type="number" name="sugar" onChange={this.handleChange} step="0.1" min="0" />
          </td>
          <td>
            <input type="number" name="protein" onChange={this.handleChange} step="0.1" min="0" />
          </td>
          <td>
            <button onClick={this.handleSubmit}>Add</button>
          </td>
        </tr>
      </tfoot>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    ingredients: globalState.ingredients
  }
}

export default connect()(IngredientAdd)