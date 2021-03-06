import { Component, OnInit } from '@angular/core';

//service
import {PersonService} from '../../../services/person.service';

import {EvaluadoresService} from '../../../services/evaluadores.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Person } from '../../../models/person';
import { element } from 'protractor';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  personList: Person[];
  p3: number = 1;

  constructor(
    private personService: PersonService,
    private evaluadoresService: EvaluadoresService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    
    this.personService.getPersons()
    .snapshotChanges()
    .subscribe(item => {
      this,this.personList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        
        this.personList.push(x as Person);
      });
    });
  }

  onEdit(person: Person){
    this.personService.selectedPerson = Object.assign({}, person);
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar a esta persona permanentemente?')){
      this.personService.deletePerson($key);
      this.toastr.success('Operacion Completada', 'Persona Eliminada' );
    }
  }
  
  onEvaluador(person: Person){
    
      
      this.evaluadoresService.insertPerson(person);
      this.toastr.success('Operación Existosa', 'Nueva evluador Agregada')
      
    }
   
  
}


