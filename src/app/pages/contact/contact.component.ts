import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [NavbarComponent,  RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
