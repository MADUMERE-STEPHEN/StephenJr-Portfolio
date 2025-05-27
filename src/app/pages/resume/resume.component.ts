import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-resume',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
