import React from 'react'
import { connect } from 'react-redux'

import { destroyIngredient, insertRecipeIngredient, updateIngredient } from '../actions'

class Ingredient extends React.Component {
  state = {
    currentIngredient: this.props.ingredient,
    isEditing: false
  }

  handleAdd = () => {
    const check = this.props.recipe.find(ingredient => ingredient.id == this.state.currentIngredient.id)
    const emptyIngredient = {
      id: this.props.ingredient.id,
      name: this.props.ingredient.name
    }
    if ( check !== undefined) {
      alert('You\'ve already added this ingredient...')
    } else (
      this.props.dispatch(insertRecipeIngredient(emptyIngredient))
    )
  }

  handleCancel = () => {
    this.setState({
      currentIngredient: this.props.ingredient,
      isEditing: false
    })
  }

  handleChange = (event) => {
    this.setState({
      currentIngredient: {
        ...this.state.currentIngredient,
        [event.target.name]: event.target.value
      }
    })
  }

  handleDelete = () => {
    if (confirm('Do you really want to delete this ingredient?')) {
      this.props.dispatch(destroyIngredient(this.props.ingredient.id))
    }
  }

  handleSave = () => {
    this.props.dispatch(updateIngredient(this.props.ingredient.id, this.state.currentIngredient))
    this.setState({
      isEditing: false
    })
  }

  handleToggleEdit = () => {
    this.setState({
      isEditing: true
    })
  }

  render () {
    let currentIngredient = this.state.currentIngredient
    let savedIngredient = this.props.ingredient
    return (
      <>
        {
          this.state.isEditing 
          ? <tr>
              <td>
                <input type="text" name="name" onChange={this.handleChange} value={currentIngredient.name} />
              </td>
              <td>
                <input type="number" name="energy" onChange={this.handleChange} step="0.1" min="0" value={currentIngredient.energy} />
              </td>
              <td>
                <input type="number" name="fat" onChange={this.handleChange} step="0.1" min="0" value={currentIngredient.fat} />
              </td>
              <td>
                <input type="number" name="carbohydrates" onChange={this.handleChange} step="0.1" min="0" value={currentIngredient.carbohydrates} />
              </td>
              <td>
                <input type="number" name="sugar" onChange={this.handleChange} step="0.1" min="0" value={currentIngredient.sugar} />
              </td>
              <td>
                <input type="number" name="protein" onChange={this.handleChange} step="0.1" min="0" value={currentIngredient.protein} />
              </td>
              <td>
                <button onClick={this.handleSave}>Save</button>
              </td>
              <td>
                <button onClick={this.handleCancel}>Cancel</button>
              </td>
            </tr>
          : <tr>
              <td>
                {savedIngredient.name}
              </td>
              <td>
                {savedIngredient.energy}
              </td>
              <td>
                {savedIngredient.fat}
              </td>
              <td>
                {savedIngredient.carbohydrates}
              </td>
              <td>
                {savedIngredient.sugar}
              </td>
              <td>
                {savedIngredient.protein}
              </td>
              <td className='table-button-td'>
                <button className='table-button' onClick={this.handleAdd}>Add</button>
              </td>
              <td className='table-button-td'>
                <button className='table-button' onClick={this.handleToggleEdit}>Edit</button>
              </td>
              <td className='table-button-td'>
                <button className='table-button' onClick={this.handleDelete}>x</button>
              </td>
            </tr>
        }
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    recipe: globalState.recipe
  }
}

export default connect(mapStateToProps)(Ingredient)