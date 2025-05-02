import { Component } from '@angular/core';

const portfolioSkillMocks = {
  heading: 'Skills',
  skills: [
    // ====== Tier 1: Core Programming Languages ======
    {
      name: 'Python',
      image: 'assets/icons/skills/python.svg'
    },
    {
      name: 'TypeScript',
      image: 'assets/icons/skills/typescript.svg'
    },
    {
      name: 'Java',
      image: 'assets/icons/skills/java.svg'
    },
    {
      name: 'JavaScript',
      image: 'assets/icons/skills/javascript.svg'
    },

    // ====== Tier 2: Web Development & Frameworks ======
    {
      name: 'Angular',
      image: 'assets/icons/skills/angular.svg'
    },
    {
      name: 'HTML/CSS',
      image: 'assets/icons/skills/html-css.png' // Recommend converting to SVG
    },
    {
      name: '.NET',
      image: 'assets/icons/skills/dotnet.svg'
    },

    // ====== Tier 3: Data Science & Databases ======
    {
      name: 'SQL',
      image: 'assets/icons/skills/sql.svg'
    },
    {
      name: 'MySQL',
      image: 'assets/icons/skills/mysql.svg'
    },
    {
      name: 'SQLite',
      image: 'assets/icons/skills/sqlite.svg'
    },
    {
      name: 'NumPy',
      image: 'assets/icons/skills/numpy.svg'
    },
    {
      name: 'Pandas',
      image: 'assets/icons/skills/pandas.svg'
    },
    {
      name: 'R',
      image: 'assets/icons/skills/r.svg'
    },

    // ====== Tier 4: DevOps & Cloud ======
    {
      name: 'AWS',
      image: 'assets/icons/skills/aws.svg'
    },
    {
      name: 'Docker',
      image: 'assets/icons/skills/docker.svg'
    },
    {
      name: 'Git',
      image: 'assets/icons/skills/git.svg'
    },
    {
      name: 'Vercel',
      image: 'assets/icons/skills/vercel.svg'
    },
    {
      name: 'Apache Maven',
      image: 'assets/icons/skills/maven.svg'
    },
    {
      name: 'Apache Tomcat',
      image: 'assets/icons/skills/tomcat.svg'
    },

    // ====== Tier 5: Testing & Other ======
    {
      name: 'Karma & Jasmine',
      image: 'assets/icons/skills/karma-jasmine.png' // Recommend SVG
    },
    {
      name: 'Matplotlib',
      image: 'assets/icons/skills/matplotlib.svg'
    },
    {
      name: 'YAML',
      image: 'assets/icons/skills/yaml.svg'
    },
    {
      name: 'Agile',
      image: 'assets/icons/skills/agile.png' // Recommend SVG
    }
  ]
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skillsData = portfolioSkillMocks;
}
