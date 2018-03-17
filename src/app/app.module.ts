import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NovelsComponent } from './novels/novels.component';
import { NovelDetailsComponent } from './novel-details/novel-details.component';
import { PrimarchsComponent } from './primarchs/primarchs.component';
import { PrimarchDetailsComponent } from './primarch-details/primarch-details.component';
import { LoginComponent } from './login/login.component';

import { DataService } from './data.service';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novels', component: NovelsComponent },
  { path: 'novels/:url_title', component: NovelDetailsComponent },
  { path: 'primarchs', component: PrimarchsComponent },
  { path: 'primarchs/:url_name', component: PrimarchDetailsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovelsComponent,
    NovelDetailsComponent,
    PrimarchsComponent,
    PrimarchDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
