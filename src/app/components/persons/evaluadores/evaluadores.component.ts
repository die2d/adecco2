import { Component, OnInit } from '@angular/core';

//service
import {EvaluadoresService} from '../../../services/evaluadores.service';
import {MatrizService} from '../../../services/matriz.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Person } from '../../../models/person';
import { element } from 'protractor';
@Component({
  selector: 'app-evaluadores',
  templateUrl: './evaluadores.component.html',
  styleUrls: ['./evaluadores.component.css']
})
export class EvaluadoresComponent implements OnInit {
  p6: number = 1;

  personListEvaluadores: Person[];
  constructor(
    private evaluadoresService: EvaluadoresService,
    private matrizService: MatrizService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.evaluadoresService.getPersons()
    .snapshotChanges()
    .subscribe(item => {
      this,this.personListEvaluadores = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        
        this.personListEvaluadores.push(x as Person);
      });
    });
  }

  onEdit(evaluador: string){
    this.matrizService.selectedMatriz.evaluador = evaluador;
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar la propiedad evaluador de esta personapermanentemente?')){
      this.evaluadoresService.deletePerson($key);
      this.toastr.success('Operacion Completada', 'Persona Eliminada' );
    }
  }

}
