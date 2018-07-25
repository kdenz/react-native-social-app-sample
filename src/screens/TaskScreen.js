/**
|--------------------------------------------------
| Screen for a read-only todolist
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import { Subscribe } from "unstated";
import TaskStore from "../stores/TaskStore";
import Todo from "../components/Todo";

export default class TaskScreenContainer extends Component {
  render() {
    return (
      <Subscribe to={[TaskStore]}>
        {taskStore => <TaskScreen taskStore={taskStore} />}
      </Subscribe>
    );
  }
}

class TaskScreen extends Component {
  componentDidMount() {
    const { taskStore } = this.props;
    taskStore.loadTodoList();
  }
  renderItem = ({ item }) => {
    return <Todo title={item.title} done={item.completed} />;
  };

  render() {
    const { taskStore } = this.props;
    return (
      <ScreenContainer title={"My Tasks"}>
        <FlatList
          data={taskStore.state.tasks}
          renderItem={this.renderItem}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScreenContainer>
    );
  }
}
