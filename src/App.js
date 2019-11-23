import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {api} from './api';
import {addTodolistAC, getTodos} from "./actions/todoActions";

const App = ({todolists, getTodos, addTodolistAC}) => {

    const addToTodoList = (title) => {
        api.createTodo(title)
            .then(res => {
                let todolist = res.data.data.item;                           // todolist, который создался на серваке и вернулся нам
                addTodolistAC(todolist);
            });
    };

    useEffect(() => {
        getTodos();
    }, [getTodos, todolists]);

    const todolist = todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} tasks={tl.tasks}/>);

        return (
            <>
                <div>
                    <AddNewItemForm addItem={addToTodoList}/>
                </div>
                <div className='App'>
                    {todolist}
                </div>
            </>
        );
};

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    };
};

export default connect(mapStateToProps, {addTodolistAC, getTodos})(App);

