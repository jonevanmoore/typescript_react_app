import React, { Component, useState } from 'react'

export default class ClassBased extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            name: "Jon",
            age: 27,
            isMale: true
        }
    }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}
