{
  /**
   * 다형성 : 다시 구현함
   * 💡 제네릭과 연관있음 : 제네릭은 placeholder와 같은 것이다. => 언제사용? 들어올 타입이 확실하지 않을 때
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

  /**
   * ❤️‍🔥노마드의 제네릭 예시
   */
  //❗️SuperPrint의 타입을 일일이 써주지 않아도 된다!
  //❗️Generic 두개를 사용하는 것도 가능하다.
  type SuperPrint = {
    <T, M>(a: T[], b?: M): void;
  };

  //❗️함수처럼 제네릭 사용해도됨
  function SuperPrint2<T>(a: T[]){
    return a[0]
  }

  const superPrint: SuperPrint = (arr) => {
    arr.forEach((i) => console.log(i));
  };

  superPrint([1, 2, 3, 4], 'hello');
  superPrint([1, 2, false, "string"], 2);
  superPrint([1, true, false, "me"]);

  //💡제네릭 예시
  type Player<E> = {
    name: string,
    extraInfo : E
  }

  type NicoExtra = {
    favFood : string
  }

  type NicoPlayer = Player<NicoExtra>

  //❗️useState
  // const [id, setId] = useState<number>() -> ❗useState에 type을 정해줄 수도있다
}
