import React, {useState} from 'react';

interface Props {
    addItem: (title: string) => void;
}

const AddNewItemForm: React.FC<Props> = ({addItem}) => {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');

    const onAddItemClick = () => {
        if (title === '') {
            setError(true);
        } else {
            setError(false);
            addItem(title);
            setTitle('');
        }
    };

    const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setError(false);
        setTitle(e.currentTarget.value);
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddItemClick();
        }
    };

    const classNameForInput = error ? 'error' : '';

    return (
        <div className="todoList-newTaskForm">
            <input
                className={classNameForInput}
                type="text"
                placeholder="New item name"
                onChange={onTitleChanged}
                onKeyPress={onKeyPress}
                value={title}
            />
            <button onClick={onAddItemClick}>Add</button>
        </div>
    );
};

export default AddNewItemForm;
