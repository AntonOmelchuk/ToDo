import {
    ADD_TASK,
    ADD_TODOLIST,
    CHANGE_TASK,
    DELETE_TODOLIST,
    DELETE_TASK
} from '../actions/types';

const initialState = {
    todolists: [
        {id: 1, title: 'Job', tasks: []},
        {id: 2, title: 'Every day', tasks: []},
        {id: 3, title: 'Learning', tasks: []}
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.payload]
            };
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if(tl.id === action.payload.todoId) {
                        return {...tl, tasks: [...tl.tasks, action.payload.newTask]}
                    } else {
                        return tl
                    }
                })
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(todo => todo.id !== action.payload)
            };
        case DELETE_TASK:
            return {
                ...state,
                todolists: [...state.todolists.map(todo => {
                    if(todo.id === action.payload.todoId) {
                        return {
                            ...todo,
                            tasks: todo.tasks.filter(task => task.id !== action.payload.taskId)
                        }
                    } else {
                        return todo
                    }
                })]
            };
        case CHANGE_TASK:
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                    if (todo.id === action.payload.todoId) {
                        return {
                            ...todo,
                            tasks: todo.tasks.map(task => {
                                if(task.id !== action.payload.taskId) {
                                    return task
                                } else {
                                    return {...task, ...action.payload.obj}
                                }
                            })
                        }
                    }
                    else {
                        return todo
                    }
                })
            };
        default:
            return state;
    }
};
