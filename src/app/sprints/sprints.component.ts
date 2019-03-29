import { Component, OnInit } from '@angular/core';
import  {ApiService} from '../api.service';
import {ActivatedRoute,Router} from '@angular/router';
import {Iteration} from '../Iteration';
import { from } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { projection } from '@angular/core/src/render3';


@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {
iterations:Iteration[];
  constructor(public rest:ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSprints();
  }
getSprints(){
  this.rest.GetSprints().subscribe((iterations: {}) => {
    console.log(iterations);
    this.iterations=iterations;
  });
}
onSaveId(id){
  localStorage.setItem("IterationId",id);
  location.replace('/WorkItems');
}
}
