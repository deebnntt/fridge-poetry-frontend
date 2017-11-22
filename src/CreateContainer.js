import React from 'react';
import { fetchWords } from './fetch.js'
import PoemPlayground from './PoemPlayground.js'

export default class CreateContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      words: []
		};
	}

  componentWillMount() {
		fetchWords()
    .then(json => this.selectWords(json))
	}

  selectWords = (json) => {
    let selected = []

    const nouns = json.filter(w => w.part_of_speech === 'noun')
    const verbs = json.filter(w => w.part_of_speech === 'verb')
    const adjectives = json.filter(w => w.part_of_speech === 'adjective')
    const adverbs = json.filter(w => w.part_of_speech === 'adverb')
    const extras = [
      ',',
      ',',
  		';',
  		';',
  		':',
  		'.',
  		'.',
  		'?',
  		'!',
  		'we',
  		'a',
  		'an',
  		'I',
  		'we',
  		'if',
  		'to',
  		'my',
  		'and',
  		'or',
  		'but',
  		'yet',
  		'she',
  		'he',
  		'they',
  		'are',
  		'is',
  		'was',
  		'had',
  		'have',
  		'give',
  		'it',
  		'of',
  		'in',
  		'by',
  		'from',
  		'as',
  		'like',
  		'with',
  		'from'
  	]

    selected.push(extras, this.shuffleWords(nouns), this.shuffleWords(verbs), this.shuffleWords(adjectives), this.shuffleWords(adverbs))

    let flattened = selected.reduce(
      function(a, b) {
        return a.concat(b);
      },
      []
    )

    this.setState ({
      words: flattened
    })
  }

  shuffleWords = (array) => {
    let random = array.sort(function(){return Math.round(Math.random());});
    let sliced = random.slice(0,20)
    return sliced.map(word => word.word)
  }

  render() {
    return (
      <div className="container-div">
        <h1>fridge poetry</h1>
        <PoemPlayground words={this.state.words}/>

      </div>
    )
  }


}
