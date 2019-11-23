import React, {useState, useEffect} from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {getTodo, addTaskAC, deleteTaskAC, deleteTodolistAC, setTasksAC,
    updateTaskAC, updateTodoTitleAC} from './actions/todoActions';
import {api} from "./api";


const TodoList = ({id, tasks, title, getTodo, addTaskAC, deleteTaskAC, deleteTodolistAC, setTasksAC,
                      updateTaskAC, updateTodoTitleAC}) => {

    const [filterValue, setFilterValue] = useState('All');

    useEffect(() => {
        getTodo(id);
    }, [getTodo, id]);


    const addTask = (newText) => {
        api.addTask(id, newText)
            .then(res => {
                let newTask = res.data.data.item;
                addTaskAC(newTask, id);
            });
    };

    const changeFilter = newFilterValue => setFilterValue(newFilterValue);

    const changeTask = (taskId, obj) => {
        tasks.forEach(t => {
            if (t.id === taskId) {
                api.changeTask({...t, ...obj})
                    .then(res => {
                        updateTaskAC(taskId, obj, id);
                    });
            }
        });


    };

    const changeStatus = (taskId, status) => {
        changeTask(taskId, {status: status});
    };

    const changeTitle = (taskId, title) => {
        changeTask(taskId, {title: title});
    };

    const deleteTodolist = () => {
        api.deleteTodo(id)
            .then(res => {
                deleteTodolistAC(id);
            });
    };

    const deleteTask = (taskId) => {
        api.deleteTask(taskId)
            .then(res => {
                deleteTaskAC(taskId, id);
            });
    };

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
                                        if (filterValue === "All") {
                                            return true;
                                        }
                                        if (filterValue === "Active") {
                                            return t.isDone === false;
                                        }
                                        if (filterValue === "Completed") {
                                            return t.isDone === true;
                                        }
                    })}/>
                    <TodoListFooter changeFilter={changeFilter} filterValue={filterValue} />
                </div>
        );
};

const ConnectedTodolist = connect(null, {getTodo, addTaskAC, deleteTaskAC, deleteTodolistAC, setTasksAC,
    updateTaskAC, updateTodoTitleAC})(TodoList);

export default ConnectedTodolist;

