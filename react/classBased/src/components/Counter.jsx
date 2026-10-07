
import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
        this.increment=()=>
        {
            console.log('increasing')
            this.setState({
            count : this.state.count +=1
            })

        }
    }
   
  render() {
    return (
      <>
        <h1>class based component</h1>
        <h2>counter task</h2>

        <h2>count is :{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </>
    )
  }
}
