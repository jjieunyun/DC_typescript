{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  //❗️ Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna");

  //❗️ Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));

  /**
   * 💡Function - Call signature
   *
   */
  type Add = (a: number, b: number) => number;
  const add3: Add = (a, b) => a + b;

  /**
   * 💡overloading : type에 따라 보내주는게 다르다
   *
   */
  type Config = {
    path: string;
    state: object;
  };

  type Push = {
    (path: string): void;
    (config: Config): void;
  };

  const push: Push = (config) => {
    if (typeof config === "string") {
      console.log(config);
    } else {
      console.log(config.path, config.state);
    }
  };

  type Add2 = {
    (a: number, b: number): number;
    (a: number, b: number, c?: number): number;
  };

  //마지막 인자는 optional
  const add2: Add = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
  };
}
