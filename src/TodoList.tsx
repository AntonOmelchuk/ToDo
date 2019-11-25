import React, {useState, useEffect} from 'react';
import './App.css';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';
import TodoListTitle from './TodoListTitle';
import AddNewItemForm from './AddNewItemForm';
import {connect} from 'react-redux';
import {getTodo, addTaskThunk, deleteTaskThunk, deleteTodoThunk,
    changeTaskThunk, updateTodoTitleAC} from './actions/todoActions';
import {api} from './api';


const TodoList = ({id, tasks, title, getTodo, addTaskThunk, deleteTaskThunk, deleteTodoThunk,
                      changeTaskThunk, updateTodoTitleAC}) => {

    const [filterValue, setFilterValue] = useState('All');

    useEffect(() => {
        getTodo(id);
    }, [getTodo, id]);


    const addTask = newText => addTaskThunk(id, newText);

    const changeFilter = newFilterValue => setFilterValue(newFilterValue);

    const changeTask = (taskId, obj) => {
        tasks.forEach(t => {
            if (t.id === taskId) changeTaskThunk(taskId, obj, id)
        });
    };

    const changeStatus = (taskId, status) => {
        console.log(taskId, status)
        changeTask(taskId, status);
    };

    const changeTitle = (taskId, title) => {
        changeTask(taskId, title);
    };

    const deleteTodolist = () => deleteTodoThunk(id);

    const deleteTask = taskId => deleteTaskThunk(taskId, id);

    const updateTodoTitle = (title) => {
        api.updateTodoTitle(id, title)
            .then(res => {
                updateTodoTitleAC(id, title);
            });
    };

        return (
                <div className='todoList'>
                    <div className='todoList-header'>
                            <TodoListTitle title={title} onUpdateTodoTitle={updateTodoTitle}
                                           onDelete={deleteTodolist} />
                            <AddNewItemForm addItem={addTask} />

                    </div>

                    <TodoListTasks changeStatus={changeStatus }
                                   changeTitle={changeTitle }
                                   deleteTask={deleteTask}
                                   tasks={tasks.filter(t => {
                                        if (filterValue === 'All') {
                                            return true;
                                        }
                                        if (filterValue === 'Active') {
                                            return t.completed === false;
                                        }
                                        if (filterValue === 'Completed') {
                                            return t.completed === true;
                                        }
                    })}/>
                    <TodoListFooter changeFilter={changeFilter} filterValue={filterValue} />
                </div>
        );
};

const ConnectedTodolist = connect(null, {getTodo, addTaskThunk, deleteTaskThunk, deleteTodoThunk,
    changeTaskThunk, updateTodoTitleAC})(TodoList);

export default ConnectedTodolist;

