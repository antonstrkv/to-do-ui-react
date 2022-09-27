import React, { useState } from 'react';


export function CreateForm({ classNameForm, idNameInput, classNameInput, classNameButton, addTodo, PRIORITY }) {
	const [text, setText] = useState('');

	const toArray = e => {
		if (text.length < 3) {
			e.currentTarget.firstElementChild.classList.add('empty');
			e.preventDefault();
		} else {
			e.currentTarget.firstElementChild.classList.remove('empty');
			addTodo({ task: text, statusTodo: 'Todo', priority: PRIORITY });
			setText('');
			e.preventDefault();
		}
	}

	return (
		<form className={classNameForm} onSubmit={toArray}>
			<input id={idNameInput} value={text} className={classNameInput}
				type="text" placeholder="Добавить важные дела" onChange={(event) => { setText(event.target.value) }} />
			<button className={classNameButton} type="submit" />
		</form>
	)
}


