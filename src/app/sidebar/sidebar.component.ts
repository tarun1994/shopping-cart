import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<string>();
  menuList:Array<string>
  constructor(private bridge: BridgeService) { }

  ngOnInit() {
    this.menuList=['Popular','Appetizers','soup','Starter','Salad','Punjabi','South Indian','Gujrati']
  }
  openMenu(event:string){
    this.bridge.nextCategory(event);
  }

}
