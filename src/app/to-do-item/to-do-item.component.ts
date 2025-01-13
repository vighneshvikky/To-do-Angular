import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Items } from './to-do-item-model';

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
    @Input() todo!: Items;
    @Output() checkDelete = new EventEmitter<void>()
    @Output() checkTask = new EventEmitter<void>()

    deleteTask(){
      this.checkDelete.emit()
    }

    checkTaskCompletion(){
      this.checkTask.emit()
    }
}
