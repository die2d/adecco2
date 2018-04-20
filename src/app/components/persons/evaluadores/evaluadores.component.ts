import { Component, OnInit } from '@angular/core';

//service
import {PersonService} from '../../../services/person.service';
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

  personListEvaluadores: Person[];
  constructor(
    private personService: PersonService,
    private matrizService: MatrizService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.personService.getPersons()
    .snapshotChanges()
    .subscribe(item => {
      this,this.personListEvaluadores = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        if(x["evaluador"] == "true"){
        this.personListEvaluadores.push(x as Person);}
      });
    });
  }

  onEdit(evaluador: string){
    this.matrizService.selectedMatriz.evaluador = evaluador;
  }

}
