import { Folder } from './../../models/folder';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  todoItems: Item[] = [];
  todoTotal: Number = 0;
  folder: Folder;
  folderName : String = '';
  currentTitle: String = '';

  constructor(private _itemService: ItemService,private router: Router,private route: ActivatedRoute,private _folderService: FolderService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    this._folderService.getFolder(id).subscribe(data => {
      this.folder = data;
      this.folderName = this.folder.name;
      this.getTasks();
    }, error => {
      console.log(error);
    })
  }


  //Gettomg all the task from the Backend
  getTasks() {
    
    let id = String(this.route.snapshot.paramMap.get('id'));

    this._folderService.getItemsByFolder(id).subscribe(data => {
      console.log(data);
      this.todoItems = data;
      this.getTasksIncomplete();
  
    }, error => {
      console.log(error);
    })
  }


  //Counting the items that isn't done
  getTasksIncomplete(){
    let total= 0;
    for (let item of this.todoItems) {
      if(!item.done){
        total++;
      }
    }
    this.todoTotal = total;
  }



  //Creating a new Task
  addTask() {
    console.log('creando la tarea');
    let id = String(this.route.snapshot.paramMap.get('id'));
    const TASK: Item = {
      name: 'new Task',
      done: false,
      isEditing: false,
      folder_id: id
    }
    this._itemService.saveItem(TASK).subscribe(data => {
      this.toastr.success('The task has been created succesfully!', 'Task created!');
      this.getTasks();
    }, error => {
      console.log(error);
    })
  }
  
  //Delete a task 
  removeTask(id: any) {
    this.todoItems.splice(this.todoItems.findIndex(item => item.id === id),1);
    this._itemService.deleteItem(id).subscribe(data => {
      this.toastr.error('The task has been delete' ,'Task deleted');
      //this.getTasks();
    }, error => {
      console.log(error);
    })
  }


  edit(item:any) {
    item.isEditing = true;
    this.currentTitle = item.name;
  }

  //Set to done/todo the task
  changeTaskState(item:any){
    item.done= !item.done;
    this.getTasksIncomplete();
    this._itemService.updateItem(item).subscribe(data => {
      this.toastr.success('The task has been updated succesfully!', 'Task updated!');
      //this.getTasks();
    }, error => {
      console.log(error);
    })
  }

  //Update one task in the Backend
  updateTask(item:any) {
    item.isEditing=false;
    if(item.name != this.currentTitle){
      this._itemService.updateItem(item).subscribe(data => {
        this.toastr.success('The task has been updated succesfully!', 'Task updated!');
      }, error => {
        console.log(error);
      })
    }
  }


}

