import { Container } from "unstated";
import API from "../services/API";

class TaskStore extends Container {
  state = {
    tasks: []
  };

  loadTodoList = async () => {
    const result = await API.fetchTodos();
    this.setState({
      tasks: result
    });
  };
}

export default new TaskStore();
