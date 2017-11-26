import { Component, OnInit } from '@angular/core';
import { Problem } from '../dataStructure/Problem';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[] = [];
  search: string = "";
  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.getProblems();
  }
  getProblems(){
    this.data.getProblems().subscribe(problems => this.problems = problems);
  }
}
