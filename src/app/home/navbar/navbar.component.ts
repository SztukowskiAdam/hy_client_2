import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTING } from 'src/app/app.routing';
import {HOME_ROUTING} from '../home.routing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbar = [
    {
      href: APP_ROUTING.HOME,
      img: 'assets/i-set/i-home.png',
      label: 'Home'
    },
    {
      href: HOME_ROUTING.SEARCH,
      img: 'assets/i-set/i-search.png',
      label: 'Search'
    },
    {
      href: HOME_ROUTING.PRODUCTS,
      img: 'assets/i-set/i-products.png',
      label: 'Products'
    },
    {
      href: HOME_ROUTING.RANKING,
      img: 'assets/i-set/i-ranking.png',
      label: 'Ranking'
    },
    {
      href: APP_ROUTING.AUTH,
      img: 'assets/i-set/i-login.png',
      label: 'Sign in'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
