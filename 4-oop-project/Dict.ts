{
  /**
   * 💡Nomad - dic
   */

  type Words = {
    //❗️이름은 모르지만 타입만 알때, 사용할 수있음
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

  const kimchi = new Word('kimchi','한국 음식')

  const dict = new Dict()
  dict.add(kimchi)
  dict.def('kimchi')
}