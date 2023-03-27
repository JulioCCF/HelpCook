import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = '/assets/style1.css';
  }

}
