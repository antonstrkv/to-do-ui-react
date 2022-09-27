export function CreateTaskElement({ completeTodo, removeTodo, index, item }) {
	return (
		<li key={index} className={(item.statusToDo) ? "new__task done" : "new__task"}>
			<label className="label">
				<input className="checkbox" type="checkbox" checked={(item.statusToDo) ? true : false}
					onChange={() => completeTodo(item)} />
				<span className="fake"></span>
				<span className="text">{item.task}</span>
			</label>
			<button className="close__btn" onClick={() => removeTodo(item)}></button>
		</li>
	)
}