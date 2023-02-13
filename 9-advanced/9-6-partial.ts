{
  /**
   * 💡Partial Type
   */
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  //❗️부분적으로 수정하고 싶을 때 사용하는 Type -> 활용예제는 아래처럼 가장 많이 사용됨
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
