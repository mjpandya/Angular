import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from '../services/menu-service.service';
import {CategoryHeaderMenu} from '../classes/CategoryHeaderMenu';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.css'],
  providers:[MenuServiceService]
})
export class NavigationComponentComponent implements OnInit {
categoryHeaderMenu: CategoryHeaderMenu[];
  constructor(private categoryMenuService:MenuServiceService) { }

  ngOnInit() {
    this.loadCategoryMenu();
  }
  loadCategoryMenu(){
    this.categoryMenuService.getCategoryHeaderMenu().subscribe(
      menus => this.categoryHeaderMenu = menus,err =>{
        console.log(err)
      }
    )
  }
}
