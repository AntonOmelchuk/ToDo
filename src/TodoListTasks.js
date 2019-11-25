import React from 'react';
import TodoListTask from "./TodoListTask";

const TodoListTasks = ({tasks, changeStatus, changeTitle, deleteTask}) => {

    const tasksElements = tasks.map( task =>
        <TodoListTask task={task} changeStatus={changeStatus}
                      changeTitle={changeTitle}
                      deleteTask={deleteTask}
        />);
    return (
        <div className='todoList-tasks'>
            {tasksElements}
        </div>
    );
};

export default TodoListTasks;

