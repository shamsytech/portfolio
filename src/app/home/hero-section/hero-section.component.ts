import { Component } from '@angular/core';

const projectHeroMocks = {
  heading: "Shams Hasan",
  headingIcon: "assets/icons/brand/sun.png",
  description: "Skilled designer and software engineer living for the thrill of bringing ideas to life ✨.",
  image: "assets/images/personal/hero-image.jpg",
  socials: [{
    link: 'https://www.linkedin.com/in/shams-h/',
    name: "Linkedin",
    icon: 'assets/icons/socials/linkedin-icon.png'
  },
  {
    link: 'https://github.com/shamsytech',
    name: "Github",
    icon: 'assets/icons/socials/github-icon.png'
  }]
}

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  heroData = projectHeroMocks;
}
