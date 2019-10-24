import React from 'react';
import './App.css';
import ListTask from "./ListTask";
import {connect} from "react-redux";
import {deleteTask} from "./actions/todoActions";

class ListTasks extends React.Component {

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId, this.props.id)
    };

    render = () => {
        let tasksElements = this.props.tasks.map(task => (
            <ListTask task={task} changeStatus={this.props.changeStatus} deleteTask={this.deleteTask}
                      changeTitle={this.props.changeTitle} key={this.props.changeTitle} />));
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default connect(null, {deleteTask})(ListTasks);

