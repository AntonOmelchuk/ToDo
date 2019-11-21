import {
    ADD_TASK,
    ADD_TODOLIST,
    DELETE_TASK,
    DELETE_TODOLIST,
    SET_TASKS,
    SET_TODOLISTS,
    UPDATE_TASK,
    UPDATE_TODO_TITLE
} from "./types";
import {api} from "../api";

export const getTodos = () => async dispatch => {
    try {
        const response = await api.getTodos();

        dispatch(setTodolistsAC(response.data))
    } catch(err) {

    }
};

export const getTodo = id => async dispatch => {
    try {
        const response = await api.getTodos()
            .then(res => {
                let allTasks = res.data.items;                           // items - это таски сервака
                this.props.setTasks(allTasks, this.props.id);
            });
    } catch(err) {

    }
}

export const updateTaskAC = (taskId, obj, todolistId) => {
    return { type: UPDATE_TASK, taskId, obj, todolistId };
};

export const deleteTodolistAC = todolistId => {
    return {
        type: DELETE_TODOLIST,
        todolistId: todolistId
    };
};

export const deleteTaskAC = (todolistId, taskId) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    };
};

export const addTaskAC = (newTask, todolistId) => {
    return { type: ADD_TASK, newTask, todolistId };
};

export const setTasksAC = (tasks, todolistId) => {
    return { type: SET_TASKS, tasks, todolistId };
};

export const addTodolistAC = newTodolist => {
    return {
        type: ADD_TODOLIST,
        newTodolist: newTodolist
    }
};

export const setTodolistsAC = todolists => {
    return {
        type: SET_TODOLISTS,
        todolists: todolists
    }
};

export const updateTodoTitleAC = (id, title) => {
    return ({
        type: UPDATE_TODO_TITLE,
        payload: {
            id,
            title
        }
    })
}