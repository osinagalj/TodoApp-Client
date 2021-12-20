import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FoldersComponent } from './components/folders/folders.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'folders', component: FoldersComponent },
  { path: 'folders/:id', component: TasksComponent },
  { path: 'create-folder', component: CreateFolderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
