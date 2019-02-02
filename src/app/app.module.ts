import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MatTabsModule } from '@angular/material'

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);