import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addbtn',
  templateUrl: './addbtn.component.html',
  styleUrls: ['./addbtn.component.scss']
})
export class AddbtnComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  //Task Output Emmiter
  @Output() public emmitTask = new EventEmitter();
  
  //AddTask
  public addTask: string = ""

  //Task Emmiter Method
  public submitTask() {
    
    this.addTask = this.addTask.trim()
    
    if(this.addTask)
    {
    this.emmitTask.emit(this.addTask)
    console.log(this.addTask)
    }

  }


}
