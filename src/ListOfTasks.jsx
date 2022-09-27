import { CreateTaskElement } from "./TaskElement";

export function ListOfTasks({ list, completeTodo, removeTodo, PRIORITY}) {
	const arr = [];
	
	list.forEach((item) => {
		if (item.priority === PRIORITY) arr.push(item);
	});

	return (
		arr.map((item, index) =>
			<CreateTaskElement item={item} key={index} completeTodo={completeTodo} removeTodo={removeTodo} todos={list} />)
	)
}