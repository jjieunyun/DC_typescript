{
  /**
   * ๐กPartial Type
   */
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  //โ๏ธ๋ถ๋ถ์ ์ผ๋ก ์์ ํ๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ Type -> ํ์ฉ์์ ๋ ์๋์ฒ๋ผ ๊ฐ์ฅ ๋ง์ด ์ฌ์ฉ๋จ
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
