//Imports
import { Component, OnInit, Output } from '@angular/core';
import { TaskList } from 'src/app/modules/Pages/task-list';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }



  //TaskList Interface Array
  public TaskList: Array<TaskList> = [


  ];


  //Delete Task Function
  public deleteTask(event: number) {

    this.TaskList.splice(event, 1)

  }
    
  //Delete All Tasks Function
  public deleteAll() {
    const confirm = window.confirm("Are you shure you want to delete all tasks?")
      if(confirm) {
        this.TaskList = []

      }
  }

  //Set Task Function
  public setTask(event: string) {
    this.TaskList.push({task: event, checked: false})

  }


}
