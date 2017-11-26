import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { NewProblemComponent } from './new-problem/new-problem.component';

const routes: Routes = [
  { path: '', redirectTo: '/problems', pathMatch: 'full' },
  { path: 'problems', component: ProblemListComponent },
  { path: 'problems/:id', component: ProblemDetailComponent },
  { path: "addProblem", component: NewProblemComponent},
  { path: '**', redirectTo: '/problems' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }