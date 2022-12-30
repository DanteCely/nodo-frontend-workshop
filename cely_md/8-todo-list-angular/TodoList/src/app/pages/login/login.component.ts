import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit LoginComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnInit LoginComponent Morí!!');
  }
}
