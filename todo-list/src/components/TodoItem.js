import React from 'react';


const TodoItem = props => {
    const toggleItem = () => {
        props.toggleItem(props.item.id)
};
return (
    <div>
        <div className={`item${props.item.completed ? ' completed' : ''}`} 
        onClick={toggleItem}>{props.item.item}</div>
    </div>
)
};


export default TodoItem;