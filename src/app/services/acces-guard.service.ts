import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class AccesGuardService implements CanActivate{

  constructor(private tokenService: TokenService, private router: Router, private toastr: ToastrService) { }


  canActivate() {
      // If the user is not logged in we'll send them back to the home page
      if (!this.tokenService.isLogged2()) {
        console.log('No estás logueado');
        this.toastr.error('No estas loggeado' ,'logeate!');
        
          this.router.navigate(['/']);
          return false;
      }else{
        console.log('SI ESTAS LOGUEADOOOOOOOOOOOOO');
        
      }

      return true;
  }
}

