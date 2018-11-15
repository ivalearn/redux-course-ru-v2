import React from 'react'
import User from '../containers/User'
import Page from '../containers/Page'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app row">
        <User />
        <Page />
      </div>
    )
  }
}

export default App
