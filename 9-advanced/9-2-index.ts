{
  /**
   * 💡10.5 index Type
   */
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  //❗️타입또한 인덱스 기반이 가능함
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'

  //❗️animal의 모든 key의 타입이 들어감(유니온 타입으로)
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
