import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = '/assets/style1.css';
  }



}
