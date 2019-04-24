import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
        <input onChange={props.handleChanges}
        placeholder='Task'
        name="task">
        </input>
        <button onClick={props.addTask}>Add Todo</button>
      </form>
    )
}

export default TodoForm