import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksComponent } from './pages/works/works.component';

export const routes: Routes = [ 
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect root to /about
  { path: '', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard route redirects invalid paths to /about

];
