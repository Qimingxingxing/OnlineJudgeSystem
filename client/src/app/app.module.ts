import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewProblemComponent } from './new-problem/new-problem.component';
import { DataService } from './services/data.service';
import { AppRoutingModule }     from './app-routing.module';
import { EditorComponent } from './editor/editor.component';
import { HttpModule }    from '@angular/http';
import { CollaborationService } from './services/collaboration.service';


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
  providers: [DataService, CollaborationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
