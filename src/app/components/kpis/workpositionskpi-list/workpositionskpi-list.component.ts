import { Component, OnInit } from '@angular/core';

//service
import {WorkpositionService} from '../../../services/workposition.service';

//toastr


import {KpiService} from '../../../services/kpi.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Kpi } from '../../../models/kpi';
import { element } from 'protractor';
//Clase Workposition
import { Workposition } from '../../../models/workposition';

@Component({
  selector: 'app-workpositionskpi-list',
  templateUrl: './workpositionskpi-list.component.html',
  styleUrls: ['./workpositionskpi-list.component.css']
})
export class WorkpositionskpiListComponent implements OnInit {
  workpositionsList: Workposition[];
  p10: number = 1;
  constructor(
    private workpositionService: WorkpositionService,
    private kpiService: KpiService,
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
    this.kpiService.selectedKpi.cargo = cargo;
    
  }



}
