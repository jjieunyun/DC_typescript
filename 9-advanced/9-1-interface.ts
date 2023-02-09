{
  /**
   * 💡10.2 Type Alias 와 interface 뭘 써야할까?(기술 측면)
   */

  /**
   * 💡interface - 기준이 되는 규격사항  (설명서 같은 느낌?) - 클래스를 구현하는 것이 있는가? 라는 생각이 듬 / 메소드를 정의한것 있음
   * 💡Types - 데이터의 모습만을 미리 지정해놓는 것, 데이터를 담는 목적 / 그냥 데이터들의 타입만 저장
   */
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  //❗️object ★ 둘다 오브젝트가능
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  //❗️class ★ 둘다 클래스에서 구현가능
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  //❗️Extends 확장가능
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // 😆 only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // 💡😆 Type aliases can use computed properties , 유니온타입 가능
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
