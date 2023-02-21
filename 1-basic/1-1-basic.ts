{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;
  /**
   * 💡Unknown :  타입을 나중에 지정해 줄 수 있다.
   *
   */
  let grade: unknown;
  if (typeof grade === "number") {
    let b = grade + 1;
  }
  if (typeof grade === "string") {
    let b = grade.toUpperCase();
  }

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void : 함수에서 아것도 리턴하지 않을때! 생략가능
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never : 리턴을 절대절대 안할 때
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
