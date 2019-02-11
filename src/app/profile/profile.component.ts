import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'

})
export class ProfileComponent  {
  fontSize = 14;
  constructor() {}
  onChange(value) {
    this.fontSize = value;
  }
}
