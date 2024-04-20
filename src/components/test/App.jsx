import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    data: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }


  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>PLUS</button>
      </div>
    )
  }
}
