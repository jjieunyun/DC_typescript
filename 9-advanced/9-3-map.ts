{
  /**
   * 💡Map타입 : 다른형태로 변환할 수있는 타입
   * 기본타입을 다른타입으로 바꿀 때 사용가능하다 (ex. optional, readonly etc...)
   */

  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  //❗️재사용성이 매우 높다.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in ❗️T가 가진 모든 키중의 하나인 P -> optional key를 모두 붙임
  };

  //안에있는 데이터가 변경이 안되는 ReadOnly
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  //❗️기존의 타입을 쓰거나 null이 가능한 타입
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  //❗️타입스크립트의 타입
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
