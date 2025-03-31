import { Component } from '@angular/core';

const portfolioSkillMocks = {
  heading: 'Skills',
  skills: [
    {
      name: 'Python',
      image: ''
    },
    {
      name: 'R',
      image: ''
    },
    {
      name: 'Java',
      image: ''
    },
    {
      name: 'TypeScript',
      image: ''
    },
    {
      name: 'JavaScript',
      image: ''
    }, {
      name: 'SQL',
      image: ''
    }, {
      name: 'Angular',
      image: ''
    }, {
      name: 'Git',
      image: ''
    }, {
      name: 'Karma & Jasmine',
      image: ''
    }, {
      name: 'HTML/CSS',
      image: ''
    }, {
      name: 'MySQL',
      image: ''
    }, {
      name: '.NET',
      image: ''
    }, {
      name: 'AWS',
      image: ''
    }, {
      name: 'Docker',
      image: ''
    }, {
      name: 'YAML',
      image: ''
    }, {
      name: 'Agile',
      image: ''
    },
    {
      name: 'Figma',
      image: ''
    }]
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skillsData = portfolioSkillMocks;
}
