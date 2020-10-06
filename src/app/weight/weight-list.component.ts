import { Component, OnInit } from '@angular/core';
import {Iweight} from './iweight';
import {WeightService} from './weight.service'

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})

export class WeightListComponent implements OnInit {
   errorMessage
  weight:Iweight[]
  
  constructor(private _weightService : WeightService) {
    
   }

  ngOnInit(): void {

    this._weightService.getWeights()
    .subscribe({
      next:data=>this.weight=data,
      error:err=>this.errorMessage=<any>err
    })
  }

}
