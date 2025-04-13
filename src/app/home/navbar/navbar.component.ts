import { Component } from '@angular/core';

const portfolioNavbarMocks = {
  navButtons: [
    { id: 'work' as const, text: 'Work' },
    { id: 'about' as const, text: 'About Me' }
  ],
  socials: [{
    link: 'https://www.linkedin.com/in/shams-h/',
    name: "LinkedIn",
    icon: 'assets/icons/socials/linkedin-icon.png'
  },
  {
    link: 'https://github.com/shams-hasan',
    name: "GitHub",
    icon: 'assets/icons/socials/github-icon.png'
  }]
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarData = portfolioNavbarMocks;
  activeView: 'work' | 'about' = 'work';
  private scrollListener: () => void;

  constructor() {
    this.scrollListener = this.onWindowScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  toggleView(view: 'work' | 'about') {
    this.activeView = view;

    if (view === 'about') {
      setTimeout(() => this.scrollToAbout(), 50);
    }
  }

  private scrollToAbout() {
    document.getElementById('about-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    }), 50;
  }

  private onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition < 100) {
      this.activeView = 'work';
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }
}