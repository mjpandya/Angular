import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from '../services/menu-service.service';
import {HeaderMenu} from '../classes/HeaderMenu';
@Component({
  selector: 'app-page-header-component',
  templateUrl: './page-header-component.component.html',
  styleUrls: ['./page-header-component.component.css'],
  providers:[MenuServiceService]
})
export class PageHeaderComponentComponent implements OnInit {
headerMenu: HeaderMenu[];
  constructor(private menuService:MenuServiceService) { }

  ngOnInit() {
    this.loadMenu()
  }
  loadMenu(){
    this.menuService.getHeaderMenu().subscribe(
      menus => this.headerMenu = menus,err =>{
        console.log(err)
      }
    )
  }
}
