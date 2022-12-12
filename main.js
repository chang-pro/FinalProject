window.addEventListener('load', () => {
	const form = document.querySelector("#todo-form");
	const input = document.querySelector("#todo-input");
	const list_el = document.querySelector("#todo");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const todo = input.value;

		const todo_el = document.createElement('div');
		todo_el.classList.add('todo');

		const todo_content_el = document.createElement('div');
		todo_content_el.classList.add('content');

		todo_el.appendChild(todo_content_el);

		const todo_input_el = document.createElement('input');
		todo_input_el.classList.add('text');
		todo_input_el.type = 'text';
		todo_input_el.value = todo;
		todo_input_el.setAttribute('readonly', 'readonly');

		todo_content_el.appendChild(todo_input_el);

		const todo_actions_el = document.createElement('div');
		todo_actions_el.classList.add('actions');
		
		const todo_complete = document.createElement('button');
		todo_complete.classList.add('complete');
		todo_complete.innerText = '✔';

		const todo_delete_el = document.createElement('button');
		todo_delete_el.classList.add('delete');
		todo_delete_el.innerText = 'Delete';

		todo_actions_el.appendChild(todo_complete);
		todo_actions_el.appendChild(todo_delete_el);

		todo_el.appendChild(todo_actions_el);

		list_el.appendChild(todo_el);

		input.value = '';

		 todo_complete.addEventListener('click', (e) => {
			todo_input_el.style.textDecoration = "line-through";
		});

		todo_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(todo_el);
		});
	});
});