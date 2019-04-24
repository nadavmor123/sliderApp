import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  images = [];
  constructor() { 
    this.images = [1,2,3];
  }

  public getData(): any {
      /* create the Observable */
    const imagesObservable = new Observable(observer => {
       /* simulate a server http call with setTieout :) */
           setTimeout(() => {
               observer.next(this.images);
           }, 1000);
    });

    return imagesObservable;
  }

}
