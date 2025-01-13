import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToDoComponent } from "./add-to-do/add-to-do.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";

@Component({
  selector: 'app-root',
  imports: [ AddToDoComponent, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app-angular';
  show: boolean = false;
  showNewTask(): void{
   this.show = true;
  }
}
