{
  /**
   * π‘Mapνμ : λ€λ₯Έννλ‘ λ³νν  μμλ νμ
   * κΈ°λ³Ένμμ λ€λ₯ΈνμμΌλ‘ λ°κΏ λ μ¬μ©κ°λ₯νλ€ (ex. optional, readonly etc...)
   */

  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  //βοΈμ¬μ¬μ©μ±μ΄ λ§€μ° λλ€.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in βοΈTκ° κ°μ§ λͺ¨λ  ν€μ€μ νλμΈ P -> optional keyλ₯Ό λͺ¨λ λΆμ
  };

  //μμμλ λ°μ΄ν°κ° λ³κ²½μ΄ μλλ ReadOnly
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

  //βοΈκΈ°μ‘΄μ νμμ μ°κ±°λ nullμ΄ κ°λ₯ν νμ
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  //βοΈνμμ€ν¬λ¦½νΈμ νμ
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
