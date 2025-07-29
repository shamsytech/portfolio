import { Component } from '@angular/core';
const footerMocks = {
  heading: "Wizard101 Collection",
  content: [
    {
      image: "assets/images/footer/wizard101-selfie.png",
      alt: "Wizard101 image",
      video: "assets/images/footer/wizard101-meme.mp4",
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
