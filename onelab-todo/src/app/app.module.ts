import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SevenComponent} from './seven/seven.component';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from "./child-comp/child-comp.component";
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo/list/list.component';
import {TodoItemComponent} from './todo/list/item/item.component';
import {TodoFormComponent} from './todo/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SevenComponent,
    ChildComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
