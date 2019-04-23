import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  slides: { image: string }[] = [];
  activeSlideIndex = 0;
 
  constructor() {
    for (let i = 1; i <= 3; i++) {
      this.addSlide(i);
    }
  }
 
  addSlide(index): void {
    this.slides.push({
      image: `assets/images/thumb${index}.jpg`
    });
  }
 
  removeSlide(index?: number): void {
    const toRemove = index;
    this.slides.splice(toRemove, 1);
  }

  duplicateSlide(index?: number): void {
    const toDup = index + 1;
    this.addSlide(toDup);
  }

  ngOnInit() {
  }

}
