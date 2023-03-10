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
  let name: undefined; // ð©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // ð©
  let person2: string | null;

  // unknown ð©
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;
  /**
   * ð¡Unknown :  íìì ëì¤ì ì§ì í´ ì¤ ì ìë¤.
   *
   */
  let grade: unknown;
  if (typeof grade === "number") {
    let b = grade + 1;
  }
  if (typeof grade === "string") {
    let b = grade.toUpperCase();
  }

  // any ð©
  let anything: any = 0;
  anything = "hello";

  // void : í¨ììì ìê²ë ë¦¬í´íì§ ììë! ìëµê°ë¥
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // ð©

  // never : ë¦¬í´ì ì ëì ë ìí  ë
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // ð©

  // objet
  let obj: object; // ð©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
