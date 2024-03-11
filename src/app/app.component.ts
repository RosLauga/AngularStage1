import { Component, InjectionToken, VERSION } from '@angular/core';
import { PostModule } from './post-module/post-module.module';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PostModule, FormsModule, RouterOutlet],
})
export class AppComponent {}
