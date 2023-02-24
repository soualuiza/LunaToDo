//Modules Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//Components Imports
import { HeaderComponent } from './components/header/header.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { AddbtnComponent } from './components/addbtn/addbtn.component';
import { DeleteAllComponent } from './components/delete-all/delete-all.component';
import { HomeComponent } from './Pages/home/home.component';

//Declarations & Imports
@NgModule({
  declarations: [
    
    ToDoComponent,
    AddbtnComponent,
    DeleteAllComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ]
})
export class HomeModule { }
