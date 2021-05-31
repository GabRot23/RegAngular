import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Login } from "../models/login.model";
import { Response } from "../models/response.model";
import { Usuario } from "../models/usuario.model";

const httpOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService {
    url: string = "https://localhost:44306/api/user/login";

    private _usuarioSubject!: BehaviorSubject<Usuario>;
    public usuario!: Observable<Usuario>;

    public get usuarioData(): Usuario {
        //console.log(this._usuarioSubject);
        return this._usuarioSubject.value;
    }

    constructor(private http: HttpClient) {
        this._usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem("usuario")!));
        this.usuario = this._usuarioSubject.asObservable();
    }

    login(login: Login): Observable<Response> {
        return this.http.post<Response>(this.url, login, httpOption)
            .pipe(
                map(res => {
                    if (res.exito === 1) {
                        const usuario: Usuario = res.data;
                        localStorage.setItem('usuario', JSON.stringify(usuario));
                        this._usuarioSubject.next(usuario);
                    }
                    return res;
                })
            );
    }

    logout() {
        localStorage.removeItem("usuario");
        this._usuarioSubject.next(null!);
    }
}