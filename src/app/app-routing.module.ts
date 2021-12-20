import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FoldersComponent } from './components/folders/folders.component';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesGuardService } from './services/acces-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'folders', component: FoldersComponent,  data: { requiresLogin: true }, canActivate: [ AccesGuardService ] }, 
  { path: 'folders/:id', component: TasksComponent,  data: { requiresLogin: true }, canActivate: [ AccesGuardService ] },
  { path: 'create-folder', component: CreateFolderComponent,  data: { requiresLogin: true }, canActivate: [ AccesGuardService ] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'tasks', component: TasksComponent,  data: { requiresLogin: true }, canActivate: [ AccesGuardService ] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
