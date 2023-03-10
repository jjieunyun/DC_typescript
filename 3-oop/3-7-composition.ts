{
  /**
   *๐ก ์์์ ๋ฌธ์ ์  : ์์์ ๊น์ด๊ฐ ๊น์ด์ง๋ฉด ๋ณต์ก์ฑ์ด ์ฆ๊ฐํจ
   * ๋ถ๋ชจํด๋์ค์์ ์์ ํ๋ฉด ์์๋ ์ํฅ์ ๋ฐ๋๋ค.
   * ํ์์คํฌ๋ฆฝํธ๋ : ํ๊ฐ์ง ์ด์์ ๋ถ๋ชจํด๋์ค๋ฅผ ์์ํ  ์์๋ค.!
   *
   * โค๏ธโ๐ฅ composition์ฌ์ฉ : ํ์ํ ๊ฒ๋ค์ ์กฐ๋ฆฝํด์ ๋ค์ ๋ง๋ฌ
   * ์์๋ณด๋ค composition์ ๋ ์ ํธํ๋ ๊ฒ์ด ์ข๋ค.
   *
   *โ๏ธ ํด๋์ค๋ค ์ฌ์ด์๋ interface๋ฅผ ํตํด ์ํธ์์ฉ ํด์ผํ๋ค.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface 0MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarSource {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //ํด๋์ค๋ฅผ ์์ํ๋ ๊ฒ์ด ์๋๋ผ interface๋ฅผ implenentํจ
  class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Steaming some milk๐ฅ...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Fancy!!!! Steaming some milk๐ฅ...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //์คํ ์ ์กฐ๊ธฐ
  class AutomaticSugarMixer implements SugarSource {
    addSugar(cuppa: CoffeeCup): CoffeeCup {
      console.log(`Adding sugar...`);
      return {
        ...cuppa,
        hasSugar: true,
      };
    }
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //์ปคํผ๋จธ์  ํด๋์ค
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...๐งผ");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... ๐ฅ");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... โ๏ธ`);
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... ๐ฅ");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  //๐กcomposition์ผ๋ก ๋ง๋  ํด๋์ค
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private sugar: SugarSource,
      private milk: MilkFrother
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const milkCoffee = this.milk.makeMilk(coffee);
      return this.sugar.addSugar(milkCoffee);
    }
  }
  const machine = new SweetCaffeLatteMachine(
    32,
    new AutomaticSugarMixer(),
    new FancyMilkSteamer()
  );
  machine.makeCoffee(2);
}
