import React, {useState} from 'react';

const TodoListTask = ({task, changeStatus, changeTitle, deleteTask}) => {

    const defaultState = {
        editMode: false,
        title: task.title
    };

    const [state, setState] = useState(defaultState);


    const onIsDoneChanged = (e) => {
        let status = e.currentTarget.checked ? 2 : 0;
        changeStatus(task.id, status);
    };

    const onTitleChanged = (e) => {
        setState({title: e.target.value});
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

    let containerCssClass = task.isDone ? 'todoList-task done' : 'todoList-task';
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
                       onChange={onIsDoneChanged}/>
                { state.editMode
                    ? <input onBlur={deactivateEditMode} onChange={onTitleChanged} autoFocus={true}
                             value={state.title} />
                    : <span onClick={activateEditMode}>{task.title}</span>
                }, priority: {priotityTitle} <button onClick={onDeleteTask}>X</button>
            </div>
    );

};

export default TodoListTask;

