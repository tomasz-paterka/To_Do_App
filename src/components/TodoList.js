import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
	const todoItems = props.list.map((item) => {
		return (
			<Todo key={item.id} item={item}/>
		)
	});
									 
	return (
		<ul>
			{todoItems}
		</ul>
	);
}

export default TodoList;
