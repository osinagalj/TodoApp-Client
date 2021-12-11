import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
