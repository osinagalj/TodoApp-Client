export class Folder {
    id?: number;
    name: string;
    tasks:any;
    
    constructor(name: string, tasks: any){
        this.name = name;
        this.tasks=tasks;
    }
   
}