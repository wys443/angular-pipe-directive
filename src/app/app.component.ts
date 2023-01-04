import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcoursedemo';
  isTest = false;

  constructor(private router: Router,) { }

  ngOnInit() {

  }
  goTo(val: string = '') {
    if (val) {
      this.isTest = true;
      this.router.navigate(['page'])
    } else {
      this.isTest = false;
      this.router.navigate([''])
    }
  }
}
