{
  /**
   * ๐ก10.5 index Type
   */
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  //โ๏ธํ์๋ํ ์ธ๋ฑ์ค ๊ธฐ๋ฐ์ด ๊ฐ๋ฅํจ
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //'male' | 'female'

  //โ๏ธanimal์ ๋ชจ๋  key์ ํ์์ด ๋ค์ด๊ฐ(์ ๋์จ ํ์์ผ๋ก)
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
