import {
    ADD_TASK,
    ADD_TODOLIST,
    DELETE_TASK,
    DELETE_TODOLIST,
    SET_TASKS,
    SET_TODOLISTS,
    UPDATE_TASK,
    UPDATE_TODO_TITLE,
    TodoActionTypes,
} from './actions/types';

const initialState: State = {
    todolists: []
};

const reducer = (state: State = initialState, action: TodoActionTypes): State => {
    switch(action.type) {
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks};
                    }
                })
            };
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, {...action.newTodolist, tasks: []}]
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case DELETE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter((t: any) => t.id !== action.taskId)
                        };
                    } else {
                        return tl;
                    }
                })
            };
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]};
                    } else {
                        return tl;
                    }
                })
            };
        case UPDATE_TODO_TITLE:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if(tl.id === action.id) {
                        return {...tl, title: action.title};
                    } else {
                        return tl;
                    }
                })
            };
        case UPDATE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map((t: any)=> {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        };
                    } else {
                        return tl;
                    }
                })
            };
        default:
            return state;
    }
};

export default reducer;
