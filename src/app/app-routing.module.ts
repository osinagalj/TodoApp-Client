import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FoldersComponent } from './components/folders/folders.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FoldersComponent },
  { path: 'folders', component: FoldersComponent },
  { path: 'folders/:id', component: TasksComponent },
  { path: 'create-folder', component: CreateFolderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
