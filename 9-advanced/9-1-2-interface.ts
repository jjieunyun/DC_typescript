{
  /**
   * ๐กnomad - interface
   * ๐ฅ ์ธํฐํ์ด์ค๋ '์ค๋ธ์ ํธ'์ ๋ชจ์์ ํน์ ํด์ฃผ๊ธฐ ์ํด ์ฌ์ฉ๋๋ค
   * type์ ์ข๋ฅ์ ๊ด๊ณ์์ด ์ด๋ ํ ํ์์ ๋ง๋ค ๋ ๋ค ์ฌ์ฉ๊ฐ๋ฅํจ
   * so, ํ์์คํฌ๋ฆฝํธ์๊ฒ object๋ฅผ ์๋ ค์ฃผ๊ธฐ ์ํด์๋ interface๋ฅผ ์ฌ์ฉํ๊ณ  ๋๋จธ์ง๋ ์ ๋ถ type์ฌ์ฉ
   */
  type Team = 'red' | 'green' | 'yellow'
  type Health = 1 | 5 | 10

  interface Player {
    readonly  name: string,
    team: Team,
    health: Health
  }

  //interface๋ class์ ํํ์ ์ ์ฌํ๋ค (์์)
  interface User {
    name: string
  }

  interface Player extends User {

  }

  //โ๏ธ์ธํฐํ์ด์ค๋ฅผ ๊ฐ๊ฐ ์ง์ ํ๊ณ  ํ๋์ ์ธ์คํด์ค์์ ํ๊บผ๋ฒ์ ์ฌ์ฉํ  ์์๋ค.
  interface User {
    age: number
  }

  interface User {
    grade:  number
  }


}