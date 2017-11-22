import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { DataService } from "./services/data.service";
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { AppRoutingModule } from "./app.routes";
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NavbarComponent,
    NewProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
