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
  isWorkActive: boolean = true // Default to "Work" view

  // Toggles between "Work" and "About Me"
  toggleView(view: 'work' | 'about') {
    this.isWorkActive = (view === "work")
  }



}
