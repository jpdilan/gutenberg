
var todoList = {

todo:[],

displayTodo:function(){
		console.log(this.todo);
	},

addTodo:function(todoText){
	this.todo.push({
					todoText:todoText,
					complete:false 
					});

	this.displayTodo();
	},

updateTodo:function(position,todoText){
	this.todo[position].todoText=todoText;
	this.displayTodo();
	},

deleteTodo:function(position){
	this.todo.splice(position,1);
	this.displayTodo();
	},

toggleTodo:function(position){
		var TODO = this.todo[position];
		TODO.complete=!TODO.complete;
		this.displayTodo();			
	}



}
