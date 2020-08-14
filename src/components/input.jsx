import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import Todo from "./todo";
import CheckAll from "./check_all";

class Input extends Component {
  render() {
    let message = "There ";
    let total = this.props.total;
    message +=
      total === 1 ? "is 1 task left." : "are " + total + " tasks left.";
    return (
      <React.Fragment>
        <div>
          <div className="jumbotron jumbotron-fluid">
            <h1 className="text-center m-5 display-1">TODOS</h1>
            <hr className="my-4"></hr>
            <div className="md-form input-group input-group-lg p-1 mx-auto col-md-5">
              <div className="input-group-prepend">
                <div className="input-group-text md-addon">
                  <CheckAll
                    check={this.props.check}
                    onClick={() => this.props.onCheckAll(this.props.check)}
                  />
                </div>
              </div>
              <input
                type="text"
                value={this.props.value}
                onChange={(val) => this.props.onUpdate(val)}
                onKeyDown={this.props.onKey}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
            {this.props.todos.map((todo) => (
              <Todo
                key={todo.id}
                value={todo.value}
                check={todo.check}
                onCheck={() => this.props.onCheck(todo.check, todo)}
                onUpdate={(val) => this.props.onUpdate(val)}
                onKey={this.props.onKey}
                onValue={this.props.onValue}
                todo={todo}
                onDelete={this.props.onDelete}
              />
            ))}
            <div className=" text-center font-weight-bold text-wrap mx-auto">
              {message}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
