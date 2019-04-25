import React from 'react';

function Todo(props) {
    console.log('inTodo', props.item.completed)
    
    function toggle() {
        props.toggleItem(props.item.id)
    }

    return (
        <div className='eachItem'>
            <li onClick={toggle}>
                {props.item.task}
            </li>
        </div>
    )
}

export default Todo;