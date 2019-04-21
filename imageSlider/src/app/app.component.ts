import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<any> = []

  constructor() {
    this.resetImages();
  }

  public reIndexImages(): void {
		this.items.forEach( (item,newIndex) => {
        item.index = newIndex;
    });
  }

  public removeImage(index): void {
    this.items.splice(index,1);
  }
  
  public duplicateImage(catalogNum): void {
    var slide = { name: 'assets/images/thumb'+catalogNum+'.jpg' ,catalog:catalogNum ,index :this.items.length }
    this.items.push(slide);
  }
  
  public resetImages(): void {
		this.items = [
      { name: 'assets/images/thumb1.jpg',catalog:1,index:0 },
      { name: 'assets/images/thumb2.jpg',catalog:2,index:1  },
      { name: 'assets/images/thumb3.jpg',catalog:3 ,index:2 }
    ]
	}
}
