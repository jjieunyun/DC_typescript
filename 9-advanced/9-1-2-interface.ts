{
  /**
   * 💡nomad - interface
   * 🔥 인터페이스는 '오브젝트'의 모양을 특정해주기 위해 사용된다
   * type은 종류에 관계없이 어떠한 타입을 만들 때 다 사용가능함
   * so, 타입스크립트에게 object를 알려주기 위해서는 interface를 사용하고 나머지는 전부 type사용
   */
  type Team = 'red' | 'green' | 'yellow'
  type Health = 1 | 5 | 10

  interface Player {
    readonly  name: string,
    team: Team,
    health: Health
  }

  //interface는 class의 형태와 유사하다 (상속)
  interface User {
    name: string
  }

  interface Player extends User {

  }

  //❗️인터페이스를 각각 지정하고 하나의 인스턴스에서 한꺼번에 사용할 수있다.
  interface User {
    age: number
  }

  interface User {
    grade:  number
  }


}