import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'layout-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private route = routes;

  getCurrentRouteName():string{
    return this.route.find(x=>'/'+x.path === this.router.url) ? this.route.find(x=>'/'+x.path === this.router.url).data.title : '';
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
