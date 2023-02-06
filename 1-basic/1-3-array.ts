{
  // Array - 배열을 정의하는 방법
  //❗️readonly : 함수 내부에서 절대 변경하지 않을 떄 사용함. 1번타입만 사용가능
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple : 서로다른 타입을 가지고 있는 배열 -> interface, type alias, class을 사용하는 것이 좋다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  //❗️❕decontructing으로 배열의 이름을 붙여서 index대신 사용할 수있음
  const [name, age] = student;
}
