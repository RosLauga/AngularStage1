import { Component, InjectionToken, VERSION } from '@angular/core';
import { PostModule } from './post-module/post-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, PostModule, FormsModule],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  highlight: boolean = false;

  query: string = '';

  // Conditional example.
  category = {
    name: 'Movie',
  };

  // loop example.

  // Arrays
  names = [
    'NgRx',
    'RxJs',
    'Nx',
    'Material',
    'UiRouter',
    'LazyLoading',
    'Promises',
    'Observables',
  ];

  // Objects
  technologies = {
    angular: 'https://angular.io',
    angularJs: 'https://angularjs.org/',
    jquery:
      'https://media1.tenor.com/images/6334e8d1038f8ba4d7bc547a4a53a470/tenor.gif?itemid=3464363',
  };

  // Switch
  fileType = 'video';

  eventCheck(event: any) {
    this.highlight = event.target.checked;
  }
}
