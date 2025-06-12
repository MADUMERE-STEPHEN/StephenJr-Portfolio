import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import AOS from 'aos';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    ResumeComponent,
    WorksComponent,
    ContactComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ fixed this line
})
export class AppComponent implements OnInit{
  title = 'StephenJR-portfolio';
   constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        AOS.refreshHard(); // or AOS.refresh()
      }
    });
  }
}
