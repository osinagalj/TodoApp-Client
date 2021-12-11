import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item';
import { Folder } from 'src/app/models/folder';
import { FolderService } from 'src/app/services/folder.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {


  todoItems: Folder[] = [];
  todoTotal: Number = 0;
  userName: String = 'Lautaro';

  folderParam: String = 'LA BUENA FOLDER';
  currentTitle: String = '';

  constructor(private _itemService: ItemService,private _folderService: FolderService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTasks();
  }


  //Gettomg all the task from the Backend
  getTasks() {
    this._folderService.getFolders().subscribe(data => {
      console.log(data);
      console.log('Getting folders..');
      this.todoItems = data;
    }, error => {
      console.log(error);
    })
  }

  edit2(){
    console.log('aprentadoo');
  }

  //Delete a task 
  removeTask(id: any) {
    this.todoItems.splice(this.todoItems.findIndex(item => item.id === id),1);
    this._folderService.deleteFolder(id).subscribe(data => {
      this.toastr.error('The Folder has been delete' ,'Task deleted');
      //this.getTasks();
    }, error => {
      console.log(error);
    })
  }

  








}
