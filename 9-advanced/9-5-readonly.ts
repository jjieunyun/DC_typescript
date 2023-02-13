{
  /**
   * 💡ReadOnly
   */
  type ToDo = {
    title: string;
    description: string;
  };

  //❗️todo아이템을 수정할 수 없음
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';
  }
}
