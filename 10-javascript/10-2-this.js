/**
 * 💡this: 호출한 사람에 따라서 This가 달라진다.
 */

console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();

//❗️클래스 안에있는 This
//const , let으로 등록된 객체는 windows에 등록되지 않는다.-> global (함수만 등록, 변수는 등록되지 않음.)
class Counter {
  count = 0;

  //arrow function을 사용하면 bind를 하지 않아도 됨
  increase = () => {
    // console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;

//❗️원하는 것을 직접 this를 부여하려면 bind를 사용해야한다.
//const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
