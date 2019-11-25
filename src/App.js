import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodo, getTodos} from "./actions/todoActions";

const App = ({todolists, getTodos, addTodo}) => {

    const addToTodoList = title => {
        addTodo(title);
    };

    useEffect(() => {
        getTodos();
    }, [getTodos]);

    console.log(todolists);

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

export default connect(mapStateToProps, {addTodo, getTodos})(App);

