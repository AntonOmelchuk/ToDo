import React, {useState} from 'react';
import '../src/App.css';

const TodoListFooter = ({changeFilter, filterValue}) => {

    const [isHidden, setIsHidden] = useState(false);

    const onAllFilterClick = () => { changeFilter('All')};
    const onCompletedFilterClick = () => { changeFilter('Completed')};
    const onActiveFilterClick = () => { changeFilter('Active')};
    const onShowFiltersClick = () => { setIsHidden(true)};
    const onHideFiltersClick = () => { setIsHidden(false)};

    const classForAll = filterValue === 'All' ? 'filter-active' : '';
    const classForCompleted = filterValue === 'Completed' ? 'filter-active' : '';
    const classForActive = filterValue === 'Active' ? 'filter-active' : '';

    return (
        <div className='todoList-footer'>
            { !isHidden && <div>
                 <button onClick={ onAllFilterClick } className={classForAll}>All</button>
                 <button onClick={ onCompletedFilterClick } className={classForCompleted}>Completed</button>
                 <button onClick={ onActiveFilterClick } className={classForActive}>Active</button>
              </div>
            }
            { !isHidden && <span onClick={ onShowFiltersClick }>hide</span> }
            { isHidden && <span onClick={ onHideFiltersClick }>show</span> }
        </div>
    );
};

export default TodoListFooter;

