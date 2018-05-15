import { Component, OnInit } from '@angular/core';

//service
import {WorkpositionService} from '../../../services/workposition.service';

//toastr


import {PersonService} from '../../../services/person.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Person } from '../../../models/person';
import { element } from 'protractor';
//Clase Workposition
import { Workposition } from '../../../models/workposition';



@Component({
  selector: 'app-workpositionsperson-list',
  templateUrl: './workpositionsperson-list.component.html',
  styleUrls: ['./workpositionsperson-list.component.css']
})
export class WorkpositionspersonListComponent implements OnInit {

  workpositionsList: Workposition[];
  p2: number = 1;

  constructor(
    private workpositionService: WorkpositionService,
    private personService: PersonService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.workpositionService.getWorkposition()
    .snapshotChanges()
    .subscribe(item => {
      this,this.workpositionsList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        this.workpositionsList.push(x as Workposition);
      });
    });
  }

  onEdit(cargo: string){
    this.personService.selectedPerson.cargo = cargo;
    
  }


}
