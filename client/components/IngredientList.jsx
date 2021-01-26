import React from 'react'
import { connect } from 'react-redux'

class IngredientList extends React.Component {
  state = {}

  render () {
    return (
      <div>
        <h1>Start of an interface...</h1>
      </div>
    )
  }

}

function mapStateToProps (globalState) {
  return {}
}

export default connect(mapStateToProps)(IngredientList)