import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public items = [];
  public newTask;

  constructor() { }

  ngOnInit(): void {
    this.items.push('Odrobić matematykę');
    this.items.push('Nauczyć się na sprawdzian')
    this.items.push('Spakować plecak');
  }

  addToList() {
    if (this.newTask == '') {

    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index) { 
    this.items.splice(index, 1); 
  } 

}
