
export interface Users{
    id: number;
    username: string;
    password: string;
    role: string;
    isactive: boolean;
}

export interface User{
    nombre: string,
    apellidos:string,
    username:string,
    password:string,
    confirmPassword:string,
    role: string,
    isactive: boolean
}
//post
export interface IProfesor{
    fecha: string;
    asignatura: string;
    username: string;
}
//get, put, delete
export interface IProfesores{
    id: number;
    fecha: string;
    asignatura: string;
    username: string;
}