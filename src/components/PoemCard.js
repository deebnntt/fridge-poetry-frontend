import React from 'react'
import CardMagnet from './CardMagnet.js'
import { Link } from 'react-router-dom';
import poemParser from '../services/poemParser.js'

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
    return stringifiedPoem
  }

  displayMagnets = () => {
    const string = this.parsedPoems()
    const replaced = string.replace(/\n/, " ")
    const array = replaced.split(" ")
    return array
    }

  mappedMagnets = () => this.displayMagnets().map((m, index) => {
      return <CardMagnet className="magnet" key={index} word={m}/>
    })

  render() {

    const url = `poems/${this.props.poemId}`

    return (
      <div className="poem-card">
        <h3><Link className="detail-link" to={url}>{this.title()}</Link></h3>
        <div>{this.mappedMagnets()}</div><br/>
      </div>
    )
  }
}

export default PoemCard
