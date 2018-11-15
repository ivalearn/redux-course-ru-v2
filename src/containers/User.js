import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLogin } from '../actions/UserActions'
import './User.css'

export class User extends React.Component {
  render() {
    console.log('**RENDER USER**')
    return <div className="ib user">{this.renderDiv()}</div>
  }
  renderDiv = () => {
    const { user, handleLogin } = this.props
    if (user.error) {
      return <p>Ошибка запроса...</p>
    }
    if (user.isFetching) {
      return <p>Загружаю...</p>
    }
    if (user.name) {
      return <p>Привет, {user.name}!</p>
    } else {
      return (
        <button className="btn" onClick={handleLogin}>
          Войти
        </button>
      )
    }
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
  }),
  handleLogin: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({ user: store.user })

const mapDispatchToProps = dispatch => ({
  handleLogin: () => dispatch(handleLogin()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
