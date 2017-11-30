export default class poemParser {
  static digest(x) {
    const HEIGHT = 25
    const bucketer = {}
    x.forEach(word => {
      const p = [word.text, word.x]
      for (const height in bucketer) {
        if (Math.abs(height - word.y) < HEIGHT) {
          bucketer[height].push(p)
          return
        }
      }
      bucketer[word.y] = [p]
    })
    return Object.values(bucketer)
  }

  static sortRows(bucketed) {
    const sortedObjs = bucketed.map(row => (row.sort((a, b) => a[1] - b[1])))
    const sortedRows = sortedObjs.map(row => row.map(word => word[0]).join(' '))
    return sortedRows.join('\n')
  }

}
