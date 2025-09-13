
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestDto } from '../model/request.model';


@Injectable({
  providedIn: 'root'
})
export class FlamesService {

   constructor() { }

  // private apiUrl = 'http://localhost:8080/api/v1/check';

  // constructor(private http: HttpClient) {}

  // checkFlames(request: RequestModel): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, request);
  // }

  flamesCheck(req: RequestDto): string {
    const count = this.checkCount(req);
    const result = this.flamesResult(count);
    return result;
  }

  private checkCount(requestDto: RequestDto ):number{
   let firstLarge:string;
   let secondLarge:string;

   if(requestDto.boyName.length <= requestDto.girlName.length ){
    firstLarge = requestDto.boyName.toLowerCase();
    secondLarge = requestDto.girlName.toLowerCase();
   }else{
    firstLarge = requestDto.girlName.toLowerCase();
    secondLarge = requestDto.boyName.toLowerCase();
   }

   let firstArray : string[] = firstLarge.split('');
   let secondArray : string[] = secondLarge.split('');

   let len =firstArray.length + secondArray.length;

   for(let i =0; i< secondArray.length;i++){
    for(let j =0; j<firstArray.length;j++){
      if(secondArray[i] === firstArray[j]){
        len -=2;
        secondArray.splice(i,1);
        firstArray.splice(j,1);

        i--;
        j--;
        break;
      }
    }
   }
   return len;
  }

  private flamesResult(count:number):string{
    let flamesList : string[] = ['F', 'L', 'A', 'M', 'E', 'S'];
    let i =0;

    while(flamesList.length > 1){
      i =(i+count-1)%flamesList.length;
      flamesList.splice(i,1);
    }
    return flamesList[0];
  }

}
