import React, {useState} from 'react';

interface Props {
    title: string;
    onDelete: () => void;
    onUpdateTodoTitle: (title: string) => void;
}

const TodoListTitle: React.FC<Props> = ({title, onDelete, onUpdateTodoTitle}) => {
    const [localTitle, setTitle] = useState(title);
    const [editMode, setEditMode] = useState(false);

    const handleUpdateTodoTitle = () => {
        onUpdateTodoTitle(localTitle);
        setEditMode(false);
    };

    return (
        <h3 className='todoList-header__title' onDoubleClick={() => setEditMode(true)}>
            {editMode ? (
                <input
                    value={localTitle}
                    onChange={e => setTitle(e.target.value)}
                    autoFocus={true}
                    onBlur={handleUpdateTodoTitle}
                />
            ) : (
                title
            )}
            <button onClick={onDelete}>&times;</button>
        </h3>
    );
};

export default TodoListTitle;
