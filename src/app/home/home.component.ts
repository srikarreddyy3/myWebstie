import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  typed!: Typed;

  socialMediaLinks = [
    { icon: 'bi-facebook', url: 'https://www.facebook.com' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com' },
    { icon: 'bi-whatsapp', url: 'https://www.whatsapp.com' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com' }
  ];
  constructor(private titleService: Title) {
    this.titleService.setTitle('Vijay - Home')
  }

  ngOnInit(): void {
    const options = {
      strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Teacher"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    this.typed = new Typed(this.typedElement.nativeElement, options);
  }

  ngOnDestroy(): void {
    // Destroy the Typed instance to prevent memory leaks
    this.typed.destroy();
  }
}
