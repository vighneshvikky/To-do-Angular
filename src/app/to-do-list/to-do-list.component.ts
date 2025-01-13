import { Component, inject, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoItemComponent } from "../to-do-item/to-do-item.component";
import { Items } from '../to-do-item/to-do-item-model';
import { NgFor } from '@angular/common';
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  imports: [ToDoItemComponent, NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit{
 
userTodos: Items[] = [];


 todoService = inject(ToDoService)

ngOnInit(): void {
  this.userTodos = this.todoService.getTodo();
}

deleteTask(id: number){
 this.todoService.removeTodo(id);
 this.userTodos = this.todoService.getTodo()
}

callCheckCompletion(id: number){
  this.todoService.toggleCompletion(id)
}

}
