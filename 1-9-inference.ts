/**
 * Type Inference :타입추론
 * 함수에서는 정확하게 타입을 명시하는 것이 좋다.
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
