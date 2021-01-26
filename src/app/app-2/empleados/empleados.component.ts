import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados : any ;
  addEmpleado = {
    name:null,
    last_name:null,
    birthday:'2021/01/25'
  }

  constructor(private empleadosService: EmpleadosService, private router: Router) { }

  ngOnInit(): void {

    this.empleadosService.getEmpleados().subscribe(data => {
      console.log(data);
      this.empleados = data;
    
    });
  }

  newEmpleado(){
    console.log(this.addEmpleado);
    this.empleadosService.addEmpleado(this.addEmpleado).subscribe();
    this.refresh();
  }

  refresh(){
    this.router.navigate(["/empleados"]);
  }

}
