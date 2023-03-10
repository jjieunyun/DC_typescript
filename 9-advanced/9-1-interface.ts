{
  /**
   * ๐ก10.2 Type Alias ์ interface ๋ญ ์จ์ผํ ๊น?(๊ธฐ์  ์ธก๋ฉด)
   */

  /**
   * ๐กinterface - ๊ธฐ์ค์ด ๋๋ ๊ท๊ฒฉ์ฌํญ  (์ค๋ช์ ๊ฐ์ ๋๋?) - ํด๋์ค๋ฅผ ๊ตฌํํ๋ ๊ฒ์ด ์๋๊ฐ? ๋ผ๋ ์๊ฐ์ด ๋ฌ / ๋ฉ์๋๋ฅผ ์ ์ํ๊ฒ ์์
   * ๐กTypes - ๋ฐ์ดํฐ์ ๋ชจ์ต๋ง์ ๋ฏธ๋ฆฌ ์ง์ ํด๋๋ ๊ฒ, ๋ฐ์ดํฐ๋ฅผ ๋ด๋ ๋ชฉ์  / ๊ทธ๋ฅ ๋ฐ์ดํฐ๋ค์ ํ์๋ง ์ ์ฅ
   */
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  //โ๏ธobject โ ๋๋ค ์ค๋ธ์ ํธ๊ฐ๋ฅ
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  //โ๏ธclass โ ๋๋ค ํด๋์ค์์ ๊ตฌํ๊ฐ๋ฅ
  // class Pos1 implements PositionType {
  //   x: number;
  //   y: number;
  // }
  //
  // class Pos2 implements PositionInterface {
  //   x: number;
  //   y: number;
  // }

  //โ๏ธExtends ํ์ฅ๊ฐ๋ฅ
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // ๐ only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // ๐ก๐ Type aliases can use computed properties , ์ ๋์จํ์ ๊ฐ๋ฅ
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
