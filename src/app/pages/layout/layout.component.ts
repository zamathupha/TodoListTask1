import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';



export interface TodoIterm{
  id: Number;
  task: string;
  completed: boolean
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgFor,NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})


export class LayoutComponent {  
  todoListTask1: TodoItem[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTask: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false 
      };
      this.todoListTask1.push(newTask);
      this.newTask = ''; 
    }
  }
  
  toggleCompleted(index: number): void {
    this.todoListTask1[index].completed = !this.todoListTask1[index].completed
  }
  deleteTask(id:number):void{
    this.todoListTask1 = this.todoListTask1.filter(item  => item.id !== id) 
    console.log(this.todoListTask1);

  }
  
  }


interface TodoItem {
  id: number;
  task: string;
  completed: boolean; 
}
