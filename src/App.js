import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
class App extends Component {
  state = {
    check: false,
    total: 0,
    value: "",
    todos: [],
  };

  totalTasks = () => {};
  handleCheck = (status, todo) => {
    let todos = this.state.todos;
    let total = 0;
    const index = todos.indexOf(todo);
    status === true
      ? (todos[index].check = false)
      : (todos[index].check = true);

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].check === false) total++;
    }
    this.setState({ todos, total });
  };

  handleCheckAll = (status) => {
    let check = this.state.check;
    let todos = this.state.todos;
    let total = 0;
    if (status === false) {
      check = true;
      for (let i = 0; i < todos.length; i++) todos[i].check = true;
    } else {
      for (let i = 0; i < todos.length; i++) todos[i].check = false;
      check = false;
    }
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].check === false) total++;
    }
    this.setState({ todos, total, check });
  };

  handleKeyPress = (event) => {
    let total = 0;
    let todos = this.state.todos;

    if (event.key === "Enter") {
      todos.unshift({
        id: this.state.todos.length < 1 ? 0 : this.state.todos[0].id + 1,
        check: false,
        value: this.state.value,
      });
      this.setState({ todos, value: "" });
    }
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].check === false) total++;
    }
    this.setState({ todos, total });
  };

  updateInputValue(val) {
    this.setState({
      value: val.target.value,
    });
  }

  handleDelete = (todo) => {
    let total = 0;
    const todos = this.state.todos.filter((t) => t.id !== todo.id);
    this.setState({ todos });
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].check === false) total++;
    }
    this.setState({ todos, total });
  };

  render() {
    return (
      <div>
        {
          <Input
            onKey={this.handleKeyPress}
            onCheck={this.handleCheck}
            onCheckAll={this.handleCheckAll}
            onValue={this.handleValue}
            value={this.state.value}
            onUpdate={(val) => this.updateInputValue(val)}
            check={this.state.check}
            todos={this.state.todos}
            onDelete={this.handleDelete}
            total={this.state.total}
          />
        }
      </div>
    );
  }
}

export default App;
