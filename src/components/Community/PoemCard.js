import React from 'react'
import CardMagnet from './CardMagnet.js'
import poemParser from '../../services/poemParser.js'
import ReactHover from 'react-hover'


const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

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
    const replaced = string.replace(/[\n]/g, " ")
    const array = replaced.split(" ")
    return array
    }


  mappedMagnets = () => this.displayMagnets().map((m, index) => {
      return <CardMagnet className="magnet" key={index} word={m} color={this.props.color}/>
    })

  render() {

    return (
      <div className="poem-card">
        <ReactHover options={optionsCursorTrueWithMargin}>
          <ReactHover.Trigger type='trigger'>
        <h3 className="community-h3">{this.title()}</h3>
          </ReactHover.Trigger>
       <ReactHover.Hover type='hover'>
         <div className="poetry-text">
         <strong>{this.title()}</strong><br/><br/>
         {this.displayPoem()}</div>
       </ReactHover.Hover>
      </ReactHover>
        <span>by </span><span className="username" onClick={this.props.handleClick} value={this.props.user}>{this.props.user}</span>
        <div>{this.mappedMagnets()}</div><br/>
      </div>
    )
  }
}

export default PoemCard
