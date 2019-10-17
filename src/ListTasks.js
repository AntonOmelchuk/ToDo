import React from 'react';
import './App.css';
import ListTask from "./ListTask";

class ListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map( task => (
            <ListTask task={task} changeStatus={this.props.changeStatus}
                          changeTitle={this.props.changeTitle} key={this.props.changeTitle} />));
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default ListTasks;

