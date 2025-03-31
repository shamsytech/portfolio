import { Component } from '@angular/core';

const projectHeroMocks = {
  heading: "Shams Hasan",
  headingIcon: "assets/icons/other/sun.jpg",
  description: "Skilled software engineer living for the thrill of bringing ideas to life ✨.",
  socials: [
    { name: 'LinkedIn', links: 'https://www.linkedin.com/in/shams-h/', icons: 'assets/icons/socials/linkedin-icon.png' },
    {
      name: 'GitHub', links: 'https://github.com/shams-hasan', icons: 'assets/icons/socials/github-icon.png'
    }],
  image: "assets/images/IMG_7490-edited.jpg",
}
 
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  heroData = projectHeroMocks;
}
