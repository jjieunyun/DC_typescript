{
  /**
   * ð¡Nomad - dic
   */

  type Words = {
    //âï¸ì´ë¦ì ëª¨ë¥´ì§ë§ íìë§ ìë, ì¬ì©í  ììì
    [key: string]: string
  }

  // let dict: Words = {
  //   "potato": 'food'
  // }

  class Dict {
    private words: Words

    constructor() {
      this.words = {}
    }
    add(word: Word) {
      if(this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }
    def(term: string) {
      return this.words[term]
    }
  }

  class Word {
    constructor(
      public term:string,
      public def:string
    ) {
    }
  }

  const kimchi = new Word('kimchi','íêµ­ ìì')

  const dict = new Dict()
  dict.add(kimchi)
  dict.def('kimchi')
}