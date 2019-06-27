import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ConsultantComponent } from './components/pages/consultant/consultant.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RecruiterComponent } from './components/pages/recruiter/recruiter.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { BlogComponent } from './components/pages/blog/blog.component';
 
const routes: Routes = [
    { path: '', 
      component: HomeComponent 
    },
    { path: 'consultant', 
      component: ConsultantComponent 
    },
    { path: 'contact', 
      component: ContactUsComponent 
    },
    { path: 'login', 
      component: LoginComponent 
    },
    { path: 'recruiter', 
      component: RecruiterComponent 
    },
    { path: 'register', 
      component: RegisterComponent 
    },
    { path: 'blog', 
      component: BlogComponent 
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
