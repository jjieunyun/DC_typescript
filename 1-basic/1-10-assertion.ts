{
  /**
   * Type Assertions ๐ฉ
   * ํ์์ 100%์ฅ๋ด ํ  ๋์๋ง ์ฌ์ฉํด์ผํจ
   * โ
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // ๐ฑ
  //โnumbers!.push(2) -> ๋ฐฐ์ด์ด๋ผ๊ณ  10000% ์ฅ๋ดํ๋ค๋ ์๋ฏธ

  const button = document.querySelector("class")!;
}
