import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { ApiAuthService } from "../services/api-auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: ApiAuthService) { }

    canActivate(route: ActivatedRouteSnapshot) {
        if (this.authService.usuarioData) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}