import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './feature/todo/todo.component';
import { TodoListComponent } from './feature/todo/component/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './feature/todo/store/todo.reducer';
import { metaReducers, reducers } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreModule.forFeature('todo', reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
