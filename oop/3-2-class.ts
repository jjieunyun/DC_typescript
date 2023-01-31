{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    //⭐️BEANS~ 는 멤버변수 : 절대 변하지 않는 값이기 때문에 클래스의 인스턴스를 만들 때 마다 새로 생성됨 -> 메모리에 낭비 -> static붙여줌
    static BEANS_GRAMM_PER_SHOP: number = 7; //class Level로 지정
    coffeeBeans: number = 0; // instance (object) Level

    //❗️constructor : 클래스를 가지고 object를 만들 때 항상 처음 호출되는 함수 -생성자함수
    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    //⭐️static은 함수에서도 적용할 수있다.
    //constrctor를 호출하지 않고 새로운 함수를 만들고 싶다면?
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  /*
   *❗️ new : 클래스의 인스턴스를 만든다
   * () : 생성자함수를 만든다
   */
  const maker = new CoffeeMaker(32);
  console.log(maker);

  CoffeeMaker.makeMachine(3);
}
