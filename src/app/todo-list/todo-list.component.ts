import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // newTodo = '';
  newTodo: string = ''; // Initialize newTodo as a string

  todos: string[] = [];

  addTodo() {
    if (this.newTodo.length >= 4 && this.newTodo.length <= 200) {
      // Save to local storage
      this.todos.push(this.newTodo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.newTodo = '';
    } else {
      alert('To-Do item length must be between 4 and 200 characters.');
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  validateInput(event: KeyboardEvent) {
    const input = event.key;
    const regex = /[a-zA-Z0-9\s]/; // Allow only letters, numbers, and spaces
    if (!regex.test(input)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    // Retrieve To-Do items from local storage
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }
}

