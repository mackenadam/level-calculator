import React from 'react'
import { connect } from 'react-redux'

import { fetchIngredients } from '../actions'

import Ingredient from './Ingredient'

class IngredientList extends React.Component {
  state = {
    ingredients: [],
    newIngredient: {
      name: '',
      energy: null,
      fat: null,
      carbohydrates: null,
      sugar: null,
      protein: null
    }
  }

  componentDidMount () {
    this.props.dispatch(fetchIngredients())
  }

  handleChange = (event) => {
    this.setState({
      newIngredient: {
        ...this.state.newIngredient,
        [event.target.name]: event.target.value
      }
    })
  }

  render () {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cal</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Sugar</th>
              <th>Protein</th>
            </tr> 
          </thead>
          <tbody>
            {
            this.props.ingredients.map(item => {
              return <Ingredient key={item.id} id={item.id} />
            })
            }
          </tbody>
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
                <button>Add</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}

function mapStateToProps (globalState) {
  return {
    ingredients: globalState.ingredients
  }
}

export default connect(mapStateToProps)(IngredientList)