import React from 'react'
import { connect } from 'react-redux'

class Ingredient extends React.Component {
  state = {}

  render () {
    return (
      <>
        <tr>
          <td>Bean Supreme</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td><button>x</button></td>
        </tr>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {}
}

export default connect(mapStateToProps)(Ingredient)