export const ADD_TODOLIST = 'TodoList/Reducer/ADD-TODOLIST';
export const DELETE_TODOLIST = 'TodoList/Reducer/DELETE-TODOLIST';
export const DELETE_TASK = 'TodoList/Reducer/DELETE-TASK';
export const ADD_TASK = 'TodoList/Reducer/ADD-TASK';
export const SET_TASKS = 'TodoList/Reducer/SET_TASKS';
export const UPDATE_TASK = 'TodoList/Reducer/UPDATE-TASK';
export const SET_TODOLISTS = 'TodoList/Reducer/SET_TODOLISTS';
export const UPDATE_TODO_TITLE = 'TodoList/Reducer/UPDATE_TODO_TITLE';

export interface SetTodolistAction {
    type: typeof SET_TODOLISTS;
    todolists: any[];
}

export interface SetTasksAction {
    type: typeof SET_TASKS;
    tasks: any[];
    todolistId: string;
}

export interface AddTodolistAction {
    type: typeof ADD_TODOLIST;
    newTodolist: any[];
}

export interface AddTaskAction {
    type: typeof ADD_TASK;
    newTask: string;
    todolistId: string;
}

export interface DeleteTodolistAction {
    type: typeof DELETE_TODOLIST;
    todolistId: string;
}

export interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    todolistId: string;
    taskId: string;
}

export interface UpdateTodoTitleAction {
    type: typeof UPDATE_TODO_TITLE;
    id: string;
    title: string;
}

export interface UpdateTaskAction {
    type: typeof UPDATE_TASK;
    taskId: string;
    obj: any;
    todolistId: string;
}

export type TodoActionTypes =
    | SetTodolistAction
    | SetTasksAction
    | AddTodolistAction
    | AddTaskAction
    | DeleteTodolistAction
    | DeleteTaskAction
    | UpdateTodoTitleAction
    | UpdateTaskAction;

export type AppTypes = TodoActionTypes;
