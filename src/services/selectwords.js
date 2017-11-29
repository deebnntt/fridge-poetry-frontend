export default class SelectWords {
  static selectWords(json) {
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
      'from',
  		'it',
  		'of',
  		'in',
  		'by',
  		'from',
  		'as',
  		'like',
  		'with',
  		'from',
      's',
      's',
      'ing',
      'do',
      "don't"
  	]

    selected.push(extras, (this.shuffleWords(nouns).slice(0,30)), (this.shuffleWords(verbs).slice(0,25)), (this.shuffleWords(adjectives).slice(0,15)), (this.shuffleWords(adverbs).slice(0,10)))

    let flattened = selected.reduce(
      function(a, b) {
        return a.concat(b);
      },
      []
    )

    let unique = flattened.reduce(function(p,c,i,a){
      if (p.indexOf(c) === -1) p.push(c);
      return p;
    }, [])

    return unique
  }

  static shuffleWords(array) {
    let random = array.sort(function(){return Math.round(Math.random());});
    return random.map(word => word.word)
  }

}
