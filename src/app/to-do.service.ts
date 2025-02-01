import { Injectable } from '@angular/core';
import { Items } from './to-do-item/to-do-item-model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private todos: Items[] = [];
  private counter = 1;

  constructor() {
    this.loadTodos();
  }

  addTodo(title: string): void {
    if (title.trim()) {
      const isDuplicate = this.todos.find(
        (todo) => todo.title.toLowerCase() === title.toLowerCase()
      );

      if (isDuplicate) {
        Swal.fire({
          icon: 'error',
          title: 'Duplicate Todo',
          text: 'This todo already exists!',
          confirmButtonText: 'OK',
        });
      } else {
        this.todos.push({
          id: this.counter++,
          completed: false,
          title,
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Empty Todo',
        text: 'Please enter a valid todo!',
        confirmButtonText: 'OK',
      });
    }

    this.saveTodo();
  }

  getTodo(): Items[] {
    return this.todos;
  }

  toggleCompletion(id: number) {
    const task = this.todos.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
    this.saveTodo();
  }

  removeTodo(taskId: number): void {
    this.todos = this.todos.filter((t) => t.id !== taskId);
    this.saveTodo();
  }

  private saveTodo(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    localStorage.setItem('id', JSON.stringify(this.counter));
  }

  private loadTodos(): void {
    const savedTodo = localStorage.getItem('todos');
    const savedId = localStorage.getItem('id');

    if (savedTodo) {
      this.todos = JSON.parse(savedTodo);
    }
    if (savedId) {

      
      this.counter = JSON.parse(savedId);
    }
  }
}
