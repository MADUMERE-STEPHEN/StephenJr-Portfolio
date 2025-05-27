import { Component, AfterViewInit, OnInit  } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import AOS from 'aos'; // no `* as`, just `AOS`
import { ResumeComponent } from '../resume/resume.component';
import { WorksComponent } from '../works/works.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, ResumeComponent, WorksComponent, ContactComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit, OnInit{
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    });

    document.querySelectorAll('.about-section').forEach(el => observer.observe(el));

      const observe = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  });

  document.querySelectorAll('.reveal').forEach(el => observe.observe(el))
  }
    ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}


