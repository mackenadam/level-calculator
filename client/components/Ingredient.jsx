import React from 'react'
import { connect } from 'react-redux'

import { destroyIngredient, updateIngredient } from '../actions'

class Ingredient extends React.Component {
  state = {
    currentIngredient: this.props.ingredient,
    isEditing: false
  }

  handleChange = (event) => {
    this.setState({
      currentIngredient: {
        ...this.state.currentIngredient,
        [event.target.name]: event.target.value
      }
    })
  }

  handleCancel = () => {
    this.setState({
      
    })
  }

  handleDelete = () => {
    this.props.dispatch(destroyIngredient(this.props.ingredient.id))
  }

  handleToggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleSave = () => {
    this.props.dispatch(updateIngredient(this.props.ingredient.id))
  }

  render () {
    // can add an variable here to cut down on writing this.state.x all the time
    return (
      <>
        {
          this.state.isEditing 
          ? <tr>
              <td>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.currentIngredient.name} />
              </td>
              <td>
                <input type="number" name="energy" onChange={this.handleChange} step="0.1" min="0" value={this.state.currentIngredient.energy} />
              </td>
              <td>
                <input type="number" name="fat" onChange={this.handleChange} step="0.1" min="0" value={this.state.currentIngredient.fat} />
              </td>
              <td>
                <input type="number" name="carbohydrates" onChange={this.handleChange} step="0.1" min="0" value={this.state.currentIngredient.carbohydrates} />
              </td>
              <td>
                <input type="number" name="sugar" onChange={this.handleChange} step="0.1" min="0" value={this.state.currentIngredient.sugar} />
              </td>
              <td>
                <input type="number" name="protein" onChange={this.handleChange} step="0.1" min="0" value={this.state.currentIngredient.protein} />
              </td>
              <td>
                <button onClick={this.handleSave}>Save</button>
              </td>
              <td>
                <button onClick={this.handleToggleEdit}>Cancel</button>
              </td>
            </tr>
          : <tr>
              <td>{this.state.currentIngredient.name}</td>
              <td>{this.state.currentIngredient.energy}</td>
              <td>{this.state.currentIngredient.fat}</td>
              <td>{this.state.currentIngredient.carbohydrates}</td>
              <td>{this.state.currentIngredient.sugar}</td>
              <td>{this.state.currentIngredient.protein}</td>
              <td><button onClick={this.handleToggleEdit}>Edit</button></td>
              <td><button onClick={this.handleDelete}>x</button></td>
            </tr>
        }
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