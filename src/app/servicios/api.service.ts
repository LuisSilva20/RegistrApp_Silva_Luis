import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { IProfesor, IProfesores, Users } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  listarUsuarios():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }
  
  CrearUsuario(newUsuario: User): Observable<User>{
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  GetAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`)
  }
  
  GetUserById(codigo: any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }


  //creamos un objeto en palabras
  CrearProfesor(newProfesor: IProfesor): Observable<IProfesor>{
  return this.httpclient.post<IProfesores>(`${environment.apiUrl}/profesores`, newProfesor);
    }

    BuscarUsuarioId(id:number):Observable<User>{
      return this.httpclient.get<User>(`${environment.apiUrl}/usuarios/?id=${id}`);
    }

    ActualizarUsuario(usuario:any):Observable<User>{
      return this.httpclient.put<User>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
    }
  
  
}
