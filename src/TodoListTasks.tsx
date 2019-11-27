import React from 'react';
import TodoListTask from './TodoListTask';

interface Props {
    tasks: any;
    changeStatus: (taskId: string, status: number) => void;
    changeTitle: (taskId: string, title: string) => void;
    deleteTask: (taskId: string) => void;
}

const TodoListTasks: React.FC<Props> = ({tasks, changeStatus, changeTitle, deleteTask}) => {
    const tasksElements = tasks.map((task: any) => (
        <TodoListTask
            task={task}
            key={task.id}
            changeStatus={changeStatus}
            changeTitle={changeTitle}
            deleteTask={deleteTask}
        />
    ));
    return <div className="todoList-tasks">{tasksElements}</div>;
};

export default TodoListTasks;
