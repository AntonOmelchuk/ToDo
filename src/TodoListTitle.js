import React, {useState} from 'react';
import './App.css';

const TodoListTitle = ({title, onDelete, onUpdateTodoTitle}) => {

    const [localTitle, setTitle] = useState(title);
    const [editMode, setEditMode] = useState(false);

    const handleUpdateTodoTitle = () => {
        onUpdateTodoTitle(localTitle)
        setEditMode(false);
    }

    return (
            <h3 className="todoList-header__title" onDoubleClick={() => setEditMode(true)}>
                {editMode
                    ? <input value={localTitle} onChange={(e) => setTitle(e.target.value)} autoFocus={true}
                    onBlur={handleUpdateTodoTitle} />
                    : title
                }
                <button onClick={onDelete}>
                    &times;
                </button>
            </h3>
    );
}

export default TodoListTitle;

