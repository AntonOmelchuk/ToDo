import React, {useState} from 'react';

const AddNewItemForm = ({addItem}) => {
    const defaultState = {
        error: false,
        title: ""
    };

    const [state, setState] = useState(defaultState);

    const onAddItemClick = () => {
        let newText = state.title;
        setState({title: ""});

        if (newText === "") {
            setState({error: true});
        } else {
            setState({error: false});
            addItem(newText);
            setState({title: ""});
        }
    };

    const onTitleChanged = (e) => {
        setState({
            error: false,
            title: e.currentTarget.value
        });
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onAddItemClick();
        }
    };

    let classNameForInput = state.error ? "error" : "";

    return (
        <div className='todoList-newTaskForm'>
            <input className={classNameForInput} type='text' placeholder='New item name'
                   onChange={onTitleChanged}
                   onKeyPress={onKeyPress}
                   value={state.title}
            />
            <button onClick={onAddItemClick}>Add</button>
        </div>

    );
};

export default AddNewItemForm;

