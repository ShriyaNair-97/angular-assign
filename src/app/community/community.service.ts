import { Injectable } from '@angular/core';
import { Icommunity} from './icommunity';
import {HttpClient} from '@angular/common/http';
import { Observable ,throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommunityService {

community:Icommunity[]
private communityUrl='assets/data/community.json'

  constructor(private _httpClient:HttpClient) { }

getCommunity():Observable<Icommunity[]>{
  return this._httpClient.get<Icommunity[]>(this.communityUrl)
  .pipe(tap((data)=>console.log(`All community :${JSON.stringify(data)}`)),
  catchError(this.handleError)
  )
}
handleError(err){  
  let errorMsg=''  
    if(err.error instanceof Error) 
       { errorMsg=`An Error occured : ${err.error.message}`;    }   
   else    {errorMsg=`server returned code : ${err.status} error message is:${err.message}`}   
  return throwError 
 }
}
