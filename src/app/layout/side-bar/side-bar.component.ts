import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module'

@Component({
  selector: 'layout-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  routes = routes

  constructor() { }

  ngOnInit(): void {
  }

}
