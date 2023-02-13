export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log("print");
}

//한 파일안에서 export는 꼭 하나만 있어야 한다! 대신에 이름은 바꿔도됨
//한 파일안에서 여러가지를 export 하려면 default를 빼야댐
