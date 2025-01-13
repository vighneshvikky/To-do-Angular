import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-add-to-do',
  imports: [ FormsModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {
   
  title: string = '';

  constructor(private task: ToDoService) {}
  onSubmit(): void{
      
      this.task.addTodo(this.title)
      this.title = ''

    
  }
}
