import { Component, OnInit, Input } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuItem: Event;
  value:string;
  keys:Array<string>;
  products:Array<string>;
  menuItems:object
  constructor(private bridge: BridgeService) { 
   
  }

  ngOnInit() {
    //  this.menuItems=['Popular','Appetizers','soup','Starter','Salad','Punjabi','South Indian','Gujrati'];
    this.menuItems={
      "Popular":['Balti Paneer','Chilli Potato','French fries','Pasta'],
      "Appetizers":['Paneer','Chilli Potato','French fries','Pasta'],
      "soup":['Balti Paneer','Chilli Potato','French fries','Pasta'],
      "Starter":['Balti Paneer','Chilli Potato','French fries','Pasta'],
      "Salad":['Balti Paneer','Chilli Potato','French fries','Pasta'],
      "Punjabi":['Balti Paneer','Chilli Potato','French fries','Pasta'],
      "South Indian":['Balti Paneer','Chilli Potato','French fries','Pasta'],
      "Gujrati":['Balti Paneer','Chilli Potato','French fries','Pasta']
    }
    this.bridge.category.subscribe(c => {
      this.value=c;
      this.products = this.menuItems[this.value];
    })
  
  }
  addItems(item:string){

  }
}
