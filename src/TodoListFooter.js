import React, {useState} from 'react';

const TodoListFooter = ({changeFilter, filterValue}) => {

    const [isHidden, setIsHidden] = useState(false);

    const classForAll = filterValue === 'All' ? 'filter-active' : '';
    const classForCompleted = filterValue === 'Completed' ? 'filter-active' : '';
    const classForActive = filterValue === 'Active' ? 'filter-active' : '';

    return (
        <div className='todoList-footer'>
            { !isHidden && <div>
                 <button onClick={() => changeFilter('All')} className={classForAll}>All</button>
                 <button onClick={() => changeFilter('Completed')} className={classForCompleted}>Completed</button>
                 <button onClick={() => changeFilter('Active')} className={classForActive}>Active</button>
              </div>
            }
            { !isHidden && <span onClick={() => setIsHidden(true)}>hide</span> }
            { isHidden && <span onClick={() => setIsHidden(false)}>show</span> }
        </div>
    );
};

export default TodoListFooter;

