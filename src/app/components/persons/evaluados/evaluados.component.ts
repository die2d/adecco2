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
  selector: 'app-evaluados',
  templateUrl: './evaluados.component.html',
  styleUrls: ['./evaluados.component.css']
})
export class EvaluadosComponent implements OnInit {

  p5: number = 1;

  personListEvaluados: Person[];
  constructor(
    private personService: PersonService,
    private toastr: ToastrService,
    private matrizService: MatrizService,
  ) { }

  ngOnInit() {
    this.personService.getPersons()
    .snapshotChanges()
    .subscribe(item => {
      this,this.personListEvaluados = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        
        this.personListEvaluados.push(x as Person);
      });
    });
  }

  onEdit(evaluado: string){
    this.matrizService.selectedMatriz.evaluado = evaluado;
  }

}
