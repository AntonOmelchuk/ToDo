import React from 'react';
import './App.css';

class ListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode= () => {
        this.setState({editMode: false});
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id)
    };

    render = () => {

        const {id, title, isDone, priority} = this.props.task;

        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
                <div className={containerCssClass}>
                    <div>
                        <input type="checkbox" checked={isDone}
                               onChange={this.onIsDoneChanged}/>
                        {this.state.editMode
                            ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true} value={title} />
                            : <span onClick={this.activateEditMode}>{id} - {title}</span>
                        }, priority: {priority}
                    </div>
                    <div>
                        <button onClick={this.deleteTask}>&times;</button>
                    </div>
                </div>
        );
    }
}

export default ListTask;

