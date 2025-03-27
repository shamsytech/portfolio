import { Component } from '@angular/core';

const portfolioAboutMeMocks = {
  heading: "About Me",
  description: `I grew up gaming on Wizard101 and later discovered programming through Python 🐍. 
  I've loved computers since I was 8, and by 12, I was typing 100 words per minute 🖥️.
  
  In addition to coding, I'm passionate about language-learning 
  and am trilingual in English, Arabic, and Spanish. I also enjoy weightlifting.`,
  image: "assets/images/IMG_7825-3.jpeg"
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  aboutMeData = portfolioAboutMeMocks;


  get formattedDescription() {
    return this.aboutMeData.description.split('<hr />').join('<div class="paragraph-spacer"></div>');
  }
}