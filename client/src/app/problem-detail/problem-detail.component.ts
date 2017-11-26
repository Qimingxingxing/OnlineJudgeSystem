import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { DataService } from '../services/data.service';
import 'rxjs/add/operator/switchMap';
import { Problem } from '../dataStructure/Problem';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem
  constructor(  
    private data: DataService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.data.getProblem(+params['id']).then(problem => {this.problem = problem;});
    })
  }
}
