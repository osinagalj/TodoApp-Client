import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item';
import { Folder } from 'src/app/models/folder';
import { FolderService } from 'src/app/services/folder.service';
import { ItemService } from 'src/app/services/item.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css']
})
export class CreateFolderComponent implements OnInit {

  constructor(private _folderService: FolderService,
    private toastr: ToastrService,
    private _router:Router) { }

  folderTitle: string = '';

  ngOnInit(): void {
  }


  //Creating a new Folder
  addFolder() {

    if(this.folderTitle==''){
      this.toastr.error("The folder's name can't be empty!", 'Folder NOT created!');
      return;
    }

    console.log('creando la tarea');
    const FOLDER: Folder = {
      name: this.folderTitle,
      tasks:null
    }
    this._folderService.saveFolder(FOLDER).subscribe(data => {
      this.toastr.success('The folder has been created succesfully!', 'Task created!');
      this._router.navigate(['/folders']);
    }, error => {
      console.log(error);
    })
  } 

}
