import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isWorkActive:boolean = true // Default to "Work" view
  
  // Toggles between "Work" and "About Me"
  toggleView(view: 'work' | 'about'){
    this.isWorkActive = (view === "work")
  }
  


}
