import React from 'react'
import CardMagnet from './CardMagnet.js'
import { Link } from 'react-router-dom';

class PoemCard extends React.Component {

  mappedMagnets = () => this.props.magnets.map((m, index) => {
    return <CardMagnet className="magnet" key={index} word={m.text} left={m.x} top={m.y}/>
  })

  title = () => {
    if (this.props.poemTitle == null) {
      return "Untitled"
    } else {
      return this.props.poemTitle
    }
  }

  render() {

    const url = `poems/${this.props.poemId}`

    return (
      <div className="poem-card">
      <h3>{this.title()}</h3>
        <table>
          <tbody>
          <tr><td>{this.mappedMagnets()}</td></tr>
          <tr><td><Link className="detail-link" to={url}>see details</Link></td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PoemCard
