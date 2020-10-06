import { Injectable } from '@angular/core';
import {Iweight} from './iweight';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  weight:Iweight[]
 private weightUrl='assets/data/weights.json'

  constructor(private _httpClient:HttpClient) { }
//   getWeight():Iweight[]{
//   return this.weight;
// }
getWeights():Observable<Iweight[]>{   
   return this._httpClient.get<Iweight[]>(this.weightUrl)  
    .pipe(tap((data)=>console.log(`All Weight : ${JSON.stringify(data)}`)),   
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
