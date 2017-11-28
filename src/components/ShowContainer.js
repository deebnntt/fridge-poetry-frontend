import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import PoemShow from './PoemShow.js'

class ShowContainer extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
        <div className="container-div">
          <h1>fridge poetry</h1>
          <PoemShow poem={this.props.currentPoem}/>
        </div>
    )
  }
}

export default ShowContainer
