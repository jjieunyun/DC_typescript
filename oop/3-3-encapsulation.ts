{
  /**
   * 3-3-encapsulation
   * 외부에서 노출되면 안되는 것들을 가리는 것
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * public : 어떤 외부라도 접근 가능
   * ⭐️ private : 외부에서 보이지 않음 (cf. 고양이의 상태를 외부에서 변경하면 안됨)
   * protected : 외부에서는 접근할 수 없지만, 상속을 받은 자식 클래스에서만 접근 가능하다
   *
   * 따로 작성하지 않으면 public으로 작성된다.
   */

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOP: number = 7;
    private coffeeBeans: number = 0;

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beanse should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOP) {
        //클래스 안에 있는 static변수를 지정하는 모습
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOP;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  /**
   * 💡Setter & Getter
   */

  //❗️ Constructor에 private를 붙이면 makerMachine이라는 함수를 통해서만  object를 생성할 수있음.
  const maker = CoffeeMaker.makeMachine(32);
  //❗️Coffeebeans에 직접적으로 수정할 수없음
  // maker.coffeeBeans = 3;
  maker.fillCoffeeBeans(32);

  /**
   * getter를 써야 fullname을 다시 할당함
   */
  //❌
  // class User {
  //   firstName: string;
  //   lastName: string;
  //   fullName: string;
  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.fullName = `${firstName} ${lastName}`;
  //   }

  class User {
    /**
     * 💡생긴 모양은 함수이지만 , get을 쓰면 멤버변수처럼 사용하면됨
     */
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error("나이는 0보다 커야함");
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("지은", "윤");
  //setter가 호출되면서 내부로직을 6으로 업데이트
  user.age = 8;
}
