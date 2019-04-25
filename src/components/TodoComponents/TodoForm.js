import React from 'react';

// const TodoForm = (props) => {
//     return (
//         <form>
//         <input onChange={props.handleChanges}
//         placeholder='Task'
//         name="task">
//         </input>
//         <button type='submit' onClick={props.addTask}>Add Todo</button>
//         <button onClick={props.removeCompleted}>Clear Completed</button>
//       </form>
//     )
// }

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
    }
    }

    onUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    submit = event => {
        event.preventDefault();
        if (this.state.input.length >= 1) {
            console.log('inside submit', this.state.input)
            this.props.addTask(this.state.input)
            this.setState({ input: '' })
        }
    }
    

    render() {
        return (
            <form>
            <input 
            placeholder='Task'
            name="input"
            value={this.state.input} 
            onChange={this.onUpdate} >
            </input>
            <button onClick={this.submit}>Add Todo</button>
          </form>
            )
    }
}

export default TodoForm