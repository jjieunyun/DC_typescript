{
  /**
   *
   */

  //스트링을 받는다면 재사용이 어렵다
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  //any : 타입이 보장되지 않는다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  /*
  💡제네릭 : 사용하는 사람이 어떤 타입인지 정의할 수있음
  ❗️<T>타입은 보통 줄여서 사용함
   */
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
