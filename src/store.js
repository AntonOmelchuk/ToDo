import {createStore} from "redux";
import {ADD_TASK, ADD_TODO, CHANGE_TASK} from "./types";

const initialState = {
    todolists: [
        {id: 1, title: 'Job', tasks: []},
        {id: 2, title: 'Every day', tasks: []},
        {id: 3, title: 'Learning', tasks: []}
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todolists: [...state.todolists, action.payload]
            };
        case ADD_TASK:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if(tl.id === action.payload.id) {
                        return {...tl, tasks: [...tl.tasks, action.payload.newTask]}
                    } else {
                        return tl
                    }
                })
            };
        case CHANGE_TASK:
            console.log(action.payload);
            return {
                ...state,
                todolists: state.todolists.map(t => {
                    if (t.id !== action.payload.id) {
                        return t;
                    }
                    else {
                        t.tasks.map(t => {
                            if(t.id === action.payload.taskId) {
                                return {...t, ...action.payload.obj}
                            } else {
                                return t
                            }
                        })
                        ;
                    }
                })
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;