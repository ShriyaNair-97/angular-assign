import { Component, OnInit } from '@angular/core';
import {Icommunity} from './icommunity';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  community:Icommunity[]
  errorMessage

  constructor(private _communityservice:CommunityService) { }

  ngOnInit(): void {
    this._communityservice.getCommunity()
    .subscribe({
      next:data=>this.community=data,
      error:err=>this.errorMessage=<any>err
    })
  }

}
