import { Component } from '@angular/core';

const projectHeroSectionMocks = {
  heading: "Shams Hasan",
  headingIcon: "assets/images/sun.jpg",
  description: "Skilled software engineer living for the thrill of bringing ideas to life ✨.",
  image: "assets/images/IMG_7490-edited.jpg",
  arrowIcon: '/Users/shamshasan/WebDevelopment/portfolio/src/assets/images/Arrow--up-right.png',
  socials: [
    { name: 'LinkedIn', links: 'https://www.linkedin.com/in/shams-h/', icons: 'assets/images/linkedin-icon.png' },
    {
      name: 'GitHub', links: 'https://github.com/shams-hasan', icons: 'assets/images/github-icon.png'
    }]
}
 
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  heroData = projectHeroSectionMocks;
}
