import { Component, OnInit } from '@angular/core';


//service
import {PersonService} from '../../../services/person.service';

import {TestService} from '../../../services/test.service';

import {EvaluadoresService} from '../../../services/evaluadores.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Person } from '../../../models/person';
import { Test} from '../../../models/test';
import { element } from 'protractor';

@Component({
  selector: 'app-testperson',
  templateUrl: './testperson.component.html',
  styleUrls: ['./testperson.component.css']
})
export class TestpersonComponent implements OnInit {
  personList: Person[];
  p23: number = 1;
  constructor(
    private personService: PersonService,
    private testService: TestService,
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
    this.testService.selectedTest.nombre=person.name;
    this.testService.selectedTest.cedula=person.cedula;
  }
}
