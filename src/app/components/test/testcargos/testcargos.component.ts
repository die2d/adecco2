import { Component, OnInit } from '@angular/core';
//service
import {WorkpositionService} from '../../../services/workposition.service';

//toastr


import {TestService} from '../../../services/test.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Test } from '../../../models/test';
import { element } from 'protractor';
//Clase Workposition
import { Workposition } from '../../../models/workposition';
@Component({
  selector: 'app-testcargos',
  templateUrl: './testcargos.component.html',
  styleUrls: ['./testcargos.component.css']
})
export class TestcargosComponent implements OnInit {
  workpositionsList: Workposition[];
  p21: number = 1;
  constructor(
    private workpositionService: WorkpositionService,
    private testService: TestService,
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
    this.testService.selectedTest.cargo=cargo;
    
  }
}
