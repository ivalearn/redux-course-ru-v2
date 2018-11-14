import React from 'react'
import PropTypes from 'prop-types'
import './User.css'

export class User extends React.Component {
  render() {
    const { name } = this.props
    return (
      <div className="ib user">
        <p>Привет, {name}!</p>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}
