{
  /**
   * 3-4-추상화
   * 인터페이스를 간단하게 만듬
   * 여러가지 방식이 있고 언어마다 하는 레벨이 달라진다.
   * 접근 제어자를 통해서(정보은닉)을 통해서 추상화가 가능하고 interface를 통해서 추상화 가능하다
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //💡인터페이스!
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialsCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  //❗️인터페이스는 외부에서 접근하는 것이기 떄문에 정확한 네이밍을 두고 class의 이름을 다른 형태로 바꾸는 것이 좋다.
  class CoffeeMachine implements CoffeeMaker, CommercialsCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOP: number = 7;
    private coffeeBeans: number = 0;

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beanse should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("머신청소 중..");
    }

    grindBeans(shots: number) {
      console.log(`커피를 갈고있음 : ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOP) {
        throw new Error("원두엄씀");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOP;
    }

    preheat(): void {
      console.log("기계 데우는 중");
    }

    extract(shots: number): CoffeeCup {
      console.log(`${shots}샷을 뽑는 중...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  //✅CoffeeMachine에서는 다른함수 사용가능
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  //❗️커피메이커에는 makeCoffe함수밖에 존재 하지 않아서 다른 함수는 사용할 수 없다. : interface에 있는 것만 사용가능
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32);
  maker2.makeCoffee(2);

  //❗️커피메이커에는 makeCoffe함수밖에 존재 하지 않아서 다른 함수는 사용할 수 없다. : interface에 있는 것만 사용가능
  const maker3: CommercialsCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  /**
   * 두개의 다른 사용자
   */

  class AmateurUser {
    constructor(private machine: CoffeeMachine) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialsCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker4);
  const pro = new ProBarista(maker4);
}
