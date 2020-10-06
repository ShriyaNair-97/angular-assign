import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeightListComponent } from './weight/weight-list.component';
import {RouterModule} from '@angular/router';
import { CommunityComponent } from './community/community.component'
import { CommunityService } from './community/community.service';

@NgModule({
  declarations: [
    AppComponent,
    WeightListComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {path:'home',component:WeightListComponent},
      {path:'community',component:CommunityComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**' ,redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
