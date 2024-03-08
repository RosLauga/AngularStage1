import { Component, InjectionToken, VERSION } from '@angular/core';
import { PostModule } from './post-module/post-module.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './app-routes.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BrowserModule, PostModule, FormsModule, RoutesModule],
})
export class AppComponent {}
