export class Usuario {
    //TODO: Agregar datos del usuario.

    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        private _token: string,
        private _expiresIn: Date
    ) { }

    get token() {
        if (!this._expiresIn || new Date() > this._expiresIn) {
            return null;
        }
        console.log("La fecha es: " + this._expiresIn);
        return this._token;
    }
}