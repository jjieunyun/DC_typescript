// Java: Exception -> 예상하지 못하는 에러
// JavaScript: Error -> 예상할 수있는 에러
// const array = new Array(100000000000000000);

//💡에러 핸들링 Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!💩";

  //💡try-catch- finally(항상 실행됨)
  //❗️에러가 발생할 만한 곳에만 try를 감싸는 것이 좋음
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
