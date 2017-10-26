import React from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from './Checkbox';

function Todo(props){
    return(
        <div className="todo">
            <Checkbox checked={props.completed} />

            <span className="todo-title">{props.title}</span>

            <button className="delete icon">
                <i className="material-icons">delete</i>
            </button>
        </div>
    );
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;