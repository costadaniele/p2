import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DanieleTasksComponentComponent } from './daniele-tasks-component/daniele-tasks-component.component';
import { DanieleHomeComponentComponent } from './daniele-home-component/daniele-home-component.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DanieleHomeComponentComponent },
      { path: 'tarefas', component: DanieleTasksComponentComponent },
      { path: 'navbar', component: NavbarComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DanieleTasksComponentComponent,
    DanieleHomeComponentComponent,
    NavbarComponent,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
