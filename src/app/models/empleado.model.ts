export interface Empleado {
    id?: number;
    rut: number;
    nombres: string;
    apellido: string;
    jefeDirecto: string;
    negocio: string;
    empresa: string;
    ceco: string;
    cargo: string;
    ubicacion: string;
    estado: string;
    fechaBaja?: Date;
    buzon?: string;
    username?: string;
    email?: string;
}