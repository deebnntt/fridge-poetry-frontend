import React from 'react'
import CardMagnet from './CardMagnet.js'
import { Link } from 'react-router-dom';
import poemParser from '../../services/poemParser.js'

class PoemCard extends React.Component {

  title = () => {
    if (this.props.poemTitle == null) {
      return "Untitled"
    } else {
      return this.props.poemTitle
    }
  }

  parsedPoems = () => {
    const magnetArray = this.props.magnets
    const bucketed = poemParser.digest(magnetArray)
    const stringifiedPoem = poemParser.sortRows(bucketed)
    console.log(stringifiedPoem)
    return stringifiedPoem
  }

  displayPoem = () => this.parsedPoems().split('\n').map(function(line, index) {
    return  (
      <span key={index}>
        {line}
        <br/>
      </span>
    )
  })

  displayMagnets = () => {
    const string = this.parsedPoems()
    const replaced = string.replace(/[\n]/g, " / ")
    return replaced
  }


  mappedMagnets = () => {
    let lines = this.displayMagnets().split(" / ")
    let lineArray = lines.map(line => line.split(" "))
    return lineArray.map((line, idx) => (
      <div className="Line">
        {line.map(word => <CardMagnet className="magnet" key={idx} word={word} color={this.props.color}/>)}
      </div>
    ))
  }

  render() {

    const url = `poems/${this.props.poemId}`

    return (
      <div className="poem-card">
        <h3><Link className="detail-link" to={url}>{this.title()}</Link></h3>
        <div className="poem-display">{this.mappedMagnets()}</div><br/>
      </div>
    )
  }
}

export default PoemCard
