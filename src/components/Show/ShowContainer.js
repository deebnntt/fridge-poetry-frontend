import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import PoemShow from './PoemShow.js'

class ShowContainer extends React.Component {

  componentDidMount() {

	}

  render() {
    return (
        <div>
          <PoemShow poem={this.props.currentPoem}/>
        </div>
    )
  }
}

export default ShowContainer
