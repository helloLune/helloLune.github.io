var n = 0;
function create_todo(){
	const todo_item = document.createElement('div');
	const todo_holder = document.getElementById('todo_holder');
	const delete_btn = document.createElement('button');
	const input = document.getElementById('main_input');
	delete_btn.className = 'btn_delete';
	todo_item.className = 'todo_item';
	todo_item.id = n;
	todo_holder.appendChild(todo_item);
	todo_item.appendChild(delete_btn);
	delete_btn.innerHTML = "удалить";
	todo_item.innerHTML =  input.value ;
	input.value = '';

}
function remove_last() {
		const todo_item =  document.getElementById(--n);
		todo_item.remove();	
}
const main_add_btn = document.getElementById('add_btn');
const main_delete_btn = document.getElementById('delete_main_btn');
main_add_btn.addEventListener('click' ,function(){
	const input = document.getElementById('main_input');
	if(input.value != ''){
	create_todo();
	n++;
	}
});
main_delete_btn.addEventListener('click' ,function(){
	if(n > 0){
	remove_last();
	}
	
	
});