import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../data-structure/problem';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor(private dataservice: DataService){}
  getProblems(): void {
    this.problems = this.dataservice.getProblems();
  }
  ngOnInit() {
    this.getProblems();
  }
}
