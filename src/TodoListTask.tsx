import React, {useState} from 'react';

const TodoListTask = ({task, changeStatus, changeTitle, deleteTask}) => {

    const defaultState = {
        editMode: false,
        title: task.title
    };

    const [state, setState] = useState(defaultState);


    const onCompletedChanged = e => {
        const status = e.currentTarget.checked ? 0 : 2;
        changeStatus(task.id, status);
    };

    const onTitleChanged = (e) => {
        setState({title: e.target.value});
        changeTitle(task.id, state.title)
    };

    const activateEditMode = () => {
        setState({editMode: true});
    };

    const deactivateEditMode= () => {
        setState({editMode: false});
    };

    const onDeleteTask = () => {
        deleteTask(task.id);
    };

    let containerCssClass = task.completed ? 'todoList-task done' : 'todoList-task';
    let priotityTitle = '';
    switch(task.priority) {
        case 0: priotityTitle = 'Low'; break;
        case 1: priotityTitle = 'Middle'; break;
        case 2: priotityTitle = 'High'; break;
        case 3: priotityTitle = 'Urgently'; break;
        case 4: priotityTitle = 'Later'; break;
    }
    return (
            <div className={containerCssClass}>
                <input type='checkbox' checked={task.status === 2}
                       onChange={onCompletedChanged} />
                { state.editMode
                    ? <input onBlur={deactivateEditMode} onChange={onTitleChanged} autoFocus={true}
                             value={state.title} />
                    : <span onClick={activateEditMode}>{task.title}</span>
                }, priority: {priotityTitle} <button onClick={onDeleteTask}>&times;</button>
            </div>
    );

};

export default TodoListTask;

