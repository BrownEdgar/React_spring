import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

  state = {
    error: null
  }
  componentDidCatch(error) {
    console.log("error:", error)
    this.setState({ error: error.message })
  }

  render() {
    return (
      <>
        {this.state.error ? <h1>{JSON.stringify(this.state.error)}</h1> : this.props.children}
      </>
    )
  }
}
