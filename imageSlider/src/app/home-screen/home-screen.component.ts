import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  title = "Carousel App"
  slides: { image: string }[] = [];
  activeSlideIndex = 0;
 
  constructor(private myService:DataService) {}

  /* reset slides array to initial state */
  resetSlides():void {
    this.slides = [];
    this.activeSlideIndex = 0;
    for (let i = 0; i <= 2; i++) {
      this.addSlide(i+1);
    }
  }
 
  /* get dummy slides array from service */
  initSlides(images):void {
    this.slides = [];
    this.activeSlideIndex = 0;
    for (let i = 0; i <= images.length-1; i++) {
      this.addSlide(images[i]);
    }
  }
 
  /* add a new slide  with index i */
  addSlide(index): void {
    this.slides.push({
      image: `assets/images/thumb${index}.jpg`
    });
  }
  
  /* remove a slide with index i */
  removeSlide(index?: number): void {
    const toRemove = index;
    this.slides.splice(toRemove, 1);
  }

  /* duplicate a slide with index i */
  duplicateSlide(index?: number): void {
    const toDup = index + 1;
    this.addSlide(toDup);
  }

  ngOnInit() {

    /* subscribe to dummyObservable */
    const dummyObservable = this.myService.getData();
    dummyObservable.subscribe((data:[any]) => {
            this.initSlides(data);
        },(err)=>{
          this.resetSlides();
        });

  }

}
