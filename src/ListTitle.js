import React from 'react';
import './App.css';

class ListTitle extends React.Component {

    onHandleDelete = () => {
        this.props.deleteTodolist(this.props.id)
    };

   render = () => {
        return (
            <div className='title__wrapper'>
                <h3 className="todoList-header__title">{this.props.title}</h3>
                <button onClick={this.onHandleDelete}>&times;</button>
            </div>
        );
    }
}

export default ListTitle;

