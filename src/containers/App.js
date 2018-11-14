import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { setYear } from '../actions/PageActions'

import './App.css'

class App extends React.Component {
  render() {
    const { user, page, setYearAction } = this.props
    return (
      <div className="row">
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.dir(store)
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(setYear(year)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
