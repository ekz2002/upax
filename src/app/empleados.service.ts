import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  baseUrl = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:tu_nombre';

  constructor(private http:HttpClient) { }
    
    getEmpleados(){
      return this.http.get(this.baseUrl);
    }

    addEmpleado(empleado:object){
      console.log(empleado);
      return this.http.post(this.baseUrl,empleado);
    }

}
