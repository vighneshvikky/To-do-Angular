import { Injectable } from '@angular/core';
import { Items } from './to-do-item/to-do-item-model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos:Items[] = [];
  private counter = 1;


  addTodo(title: string): void{
   
if(title.trim()){
  this.todos.push({
    id: this.counter++,
    completed:false,
    title
  })
}




  }


  getTodo(): Items[]{
    return this.todos;
  }


  toggleCompletion(id: number){
    const task = this.todos.find((t) => t.id === id)
    if(task){
      task.completed = !task.completed
    }
  }

 
   removeTodo(taskId: number): void{
    console.log(`taskId = ${taskId}`);
    
   this.todos = this.todos.filter((t) => t.id   !== taskId)
     
   }


}
