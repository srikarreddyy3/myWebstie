import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems = [
    { link: '/home', label: 'Home', active: false},
    { link: '/about', label: 'About' , active: false},
    { link: '/skills', label: 'Skills' , active: false},
    { link: '/projects', label: 'Projects' , active: false},
    { link: '/education', label: 'Education', active: false },
    { link: '/contact', label: 'Contact', active: false }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState(event.urlAfterRedirects);
      }
    });
  }

  updateActiveState(activeUrl: string) {
    this.navItems.forEach(item => {
      item.active = (item.link === activeUrl);
    });
  }
}
