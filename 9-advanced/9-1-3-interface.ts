{
  /**
   * 💡interface - partTwo
   * 🔥abstract : 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상화 클래스를 사용
   */

    // abstract class User {
    //   constructor(
    //     //❗️protected : 추상클래스로부터 상속받은 클래스들이 property에 집근 할 수있도록함
    //     protected firstName: string,
    //     protected lastName: string
    //   ) {
    //   }
    //
    //   abstract sayHi(name: string):string
    //   abstract fullName():string
    // }

    //🔥추상클래스를 interface로 바꾸기
  interface User {
    firstName: string,
    lastName: string

    sayHi(name: string): string

    fullName(): string
  }

  interface Human {
    health: number
  }

  //🔥interface를 상송받을 때는 extends대신에 implements를 사용함!
  //interface를 추가로 상속받을 수있음!
  class Player implements User, Human {
    constructor(
      public firstName: string,
      public lastName: string,
      public health: number,
    ) {}

    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
      return `hello ${name}, My name is ${this.fullName()}`
    }
  }

  //🔥인터페이스도 타입으로 사용할 수있음
  function makeUser(user: User) {
    return 'hi'
  }

  makeUser({
    firstName: 'nico',
    lastName: 'la',
    fullName(): string {
      return ''
    },
    sayHi(name: string): string {
      return ''
    }
  })
}