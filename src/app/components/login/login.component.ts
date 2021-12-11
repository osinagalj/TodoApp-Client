import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

/*     $(document).ready(function () {
      $('.toggle').on('click', function () {
          $('.container').stop().addClass('active');
      });
      $('.close').on('click', function () {
          $('.container').stop().removeClass('active');
      });
  }); */


  }

}
