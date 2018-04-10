import React from 'react';

const Todo = props => {
	return (
		<li onClick={() => props.removeTodo(props.item.id)}>{props.item.text}</li>
	);
}

export default Todo;