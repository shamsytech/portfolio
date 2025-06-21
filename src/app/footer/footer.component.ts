import { Component } from '@angular/core';
const footerMocks = {
  socials: [{
    link: '',
    name: "TikTok",
    icon: ''
  }],
  images: [
    {
      image: "",
      alt: "Wizard101 image 1"
    },
    {
      image: "",
      alt: "Wizard101 image 2"
    }
  ]
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']


})


export class FooterComponent {
  currentYear = new Date().getFullYear();
  footerData = footerMocks;
}
