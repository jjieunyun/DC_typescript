/**
 * ๐กthis: ํธ์ถํ ์ฌ๋์ ๋ฐ๋ผ์ This๊ฐ ๋ฌ๋ผ์ง๋ค.
 */

console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();

//โ๏ธํด๋์ค ์์์๋ This
//const , let์ผ๋ก ๋ฑ๋ก๋ ๊ฐ์ฒด๋ windows์ ๋ฑ๋ก๋์ง ์๋๋ค.-> global (ํจ์๋ง ๋ฑ๋ก, ๋ณ์๋ ๋ฑ๋ก๋์ง ์์.)
class Counter {
  count = 0;

  //arrow function์ ์ฌ์ฉํ๋ฉด bind๋ฅผ ํ์ง ์์๋ ๋จ
  increase = () => {
    // console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;

//โ๏ธ์ํ๋ ๊ฒ์ ์ง์  this๋ฅผ ๋ถ์ฌํ๋ ค๋ฉด bind๋ฅผ ์ฌ์ฉํด์ผํ๋ค.
//const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
