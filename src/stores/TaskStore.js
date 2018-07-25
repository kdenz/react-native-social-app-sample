/**
|--------------------------------------------------
| Unstated Store for Todo/Task-related states/actions
|--------------------------------------------------
*/
import { Container } from "unstated";
import API from "../services/API";

class TaskStore extends Container {
  state = {
    tasks: []
  };

  // Loads TodoList when TaskScreen is first mounted
  loadTodoList = async () => {
    const result = await API.fetchTodos();
    this.setState({
      tasks: result
    });
  };
}

export default new TaskStore();
