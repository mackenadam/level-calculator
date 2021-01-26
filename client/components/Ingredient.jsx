import React from 'react'
import { connect } from 'react-redux'

class Ingredient extends React.Component {
  state = {}

  render () {
    return (
      <>
        <tr>
          <td>Bean Supreme</td>
          <td>150</td>
          <td>579</td>
          <td>6.6</td>
          <td>4.6</td>
          <td>3.5</td>
          <td>12.2</td>
        </tr>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {}
}

export default connect(mapStateToProps)(Ingredient)