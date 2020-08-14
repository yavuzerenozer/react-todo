import React, { Component } from "react";
import Check from "./check";
import Delete from "./delete";

class Todo extends Component {
  state = {};
  render() {
    let classes = "form-control ";
    classes += this.props.check === true ? "font-italic" : "";
    return (
      <div className="md-form input-group input-group-lg p-1 mx-auto col-md-5">
        <div className="input-group-prepend">
          <div className="input-group-text md-addon">
            <Check
              check={this.props.todo.check}
              onClick={() =>
                this.props.onCheck(this.props.todo.check, this.props.todo)
              }
            />
          </div>
        </div>
        <input
          type="text"
          value={this.props.value}
          onChange={(val) => this.props.onUpdate(val)}
          onKeyDown={(evt) => this.props.onKey(evt)}
          className={classes}
          disabled={this.props.check}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        <div class="input-group-append">
          <div className="input-group-text md-addon">
            <Delete onClick={() => this.props.onDelete(this.props.todo)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
