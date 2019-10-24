import React from 'react';
import './App.css';
import ListTasks from "./ListTasks";
import ListFooter from "./ListFooter";
import ListTitle from "./ListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTask, changeTask, deleteTodolist} from "./actions/todoActions";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: 'All'
        }
    }

    nextTaskId = 1;

    addTask = newText => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.nextTaskId++;
        this.props.addTask(newTask, this.props.id);
    };

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        });
    };

    changeTask = (taskId, obj) => {
        this.props.changeTask(taskId, obj, this.props.id)
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    deleteTodolist = id => {
        this.props.deleteTodolist(id)
    };

    render = () => {
        return (
            <div className="todoList">
                <div className="todoList-header">
                        <ListTitle title={this.props.title} deleteTodolist={this.deleteTodolist} id={this.props.id} />
                        <AddNewItemForm addItem={this.addTask} />
                </div>

                <ListTasks changeStatus={this.changeStatus }
                           changeTitle={this.changeTitle }
                           id={this.props.id}
                           tasks={this.props.tasks.filter(t => {
                    if (this.state.filterValue === "All") {
                        return true;
                    }
                    if (this.state.filterValue === "Active") {
                        return t.isDone === false;
                    }
                    if (this.state.filterValue === "Completed") {
                        return t.isDone === true;
                    }})}/>
                <ListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
            </div>
        );
    }
}

export default connect(null, {addTask, deleteTodolist, changeTask})(List);

