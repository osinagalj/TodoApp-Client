export class Item {
    id?: number;
    name: string;
    done: boolean;
    isEditing:boolean;
    folder_id:string;

    constructor(name: string, done: boolean, isEditing: boolean,folder_id:string){
        this.name = name;
        this.done = done;
        this.isEditing = isEditing;
        this.folder_id=folder_id;
    }
   
}