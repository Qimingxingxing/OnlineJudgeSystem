import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { DataService } from "./services/data.service";
import { AuthService } from "./services/auth.service";
import { CollaborationService } from './services/collaboration.service';

import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { AppRoutingModule } from "./app.routes";
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NavbarComponent,
    NewProblemComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, AuthService, CollaborationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
