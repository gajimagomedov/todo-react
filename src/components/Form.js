import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import Button from './Button';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
        let title = this.state.title;

        if(title){
            this.props.onAdd(title);
            this.setState({title});
        }
    }

    handleChange(e){

        let title = e.target.value;

        this.setState({title});
    }

    render(){
        return(
            <form className = "todo-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Что нужно сделать" 
                    onChange={this.handleChange} 
                    value={this.state.title} />
                <Button type="submit" text="">Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func
}

export default Form;