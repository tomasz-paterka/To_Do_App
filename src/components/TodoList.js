import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
	const todoItems = props.list.map((item) => <li key={item.id}>{item.text}</li>);
	return (
		<ul>
			{todoItems}
		</ul>
	);
}

export default TodoList;
