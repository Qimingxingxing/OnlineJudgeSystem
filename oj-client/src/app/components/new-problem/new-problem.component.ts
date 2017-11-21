import { Component, OnInit } from '@angular/core';
import { Problem } from "../../data-structure/problem";
import { DataService } from '../../services/data.service';
const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  addProblem() {
    this.data.addProblem(this.newProblem);
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }
}
