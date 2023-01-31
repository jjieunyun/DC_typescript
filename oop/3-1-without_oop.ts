{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //타입추론이 되기 때문에 number안해도돼
  const BEANS_GRAMM_PER_SHOP: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOP) {
      throw new Error("Not enough coffee beans!");
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOP;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOP;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
