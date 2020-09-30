import { Component, OnInit } from '@angular/core';
import listaUsuarios from 'src/assets/json/usuarios.json';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  Usuarios: any = listaUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
