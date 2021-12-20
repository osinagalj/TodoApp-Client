import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FoldersComponent } from './components/folders/folders.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CreateFolderComponent } from './components/create-folder/create-folder.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { interceptorProvider } from './components/interceptors/prod-interceptor.service';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FoldersComponent,
    HeaderComponent,
    CreateFolderComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    NotFoundComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider], //JWT
  bootstrap: [AppComponent]
})
export class AppModule { }
