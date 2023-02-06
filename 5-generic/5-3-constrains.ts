/**
 * 제네릭조건 :
 */

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

//💡제대로된 제네릭으로 구현한 함수 : 제네릭이지만 employ를 extends 한 제네릭임(확장)
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

//💡 제네릭 예제
const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

//💡 object에 들어있는 key 중의 하나를 상속한다
//❗️return 되는 값은 obj의 key중의 value를 리턴한다는 의미
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
