import React, {useState, FormEvent} from 'react';

interface Props {
    task: any;
    changeStatus: (taskId: string, status: number) => void;
    changeTitle: (taskId: string, title: string) => void;
    deleteTask: (taskId: string) => void;
}

const TodoListTask: React.FC<Props> = ({task, changeStatus, changeTitle, deleteTask}) => {
    const [title, setTitle] = useState<string>(task.title);
    const [editMode, setEditMode] = useState<boolean>(false);

    const onCompletedChanged = (e: React.FormEvent<HTMLInputElement>) => {
        const status = e.currentTarget.checked ? 0 : 2;
        changeStatus(task.id, status);
    };

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        changeTitle(task.id, title);
    };

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => setEditMode(false);

    const onDeleteTask = () => deleteTask(task.id);

    let containerCssClass = task.completed ? 'todoList-task done' : 'todoList-task';
    let priotityTitle = '';
    switch (task.priority) {
        case 0:
            priotityTitle = 'Low';
            break;
        case 1:
            priotityTitle = 'Middle';
            break;
        case 2:
            priotityTitle = 'High';
            break;
        case 3:
            priotityTitle = 'Urgently';
            break;
        case 4:
            priotityTitle = 'Later';
            break;
    }
    return (
        <div className={containerCssClass}>
            <input type="checkbox" checked={task.status === 2} onChange={onCompletedChanged} />
            {editMode ? (
                <input onBlur={deactivateEditMode} onChange={onTitleChanged} autoFocus={true} value={title} />
            ) : (
                <span onClick={activateEditMode}>{task.title}</span>
            )}
            priority: {priotityTitle} <button onClick={onDeleteTask}>&times;</button>
        </div>
    );
};

export default TodoListTask;
