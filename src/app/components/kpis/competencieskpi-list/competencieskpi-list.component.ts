import { Component, OnInit } from '@angular/core';



import { Kpi } from '../../../models/kpi';





import {KpiService} from '../../../services/kpi.service';
//service
import {CompetencyService} from '../../../services/competency.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Person } from '../../../models/person';
import { element } from 'protractor';
import { Competency } from '../../../models/competency';


@Component({
  selector: 'app-competencieskpi-list',
  templateUrl: './competencieskpi-list.component.html',
  styleUrls: ['./competencieskpi-list.component.css']
})
export class CompetencieskpiListComponent implements OnInit {

  arrayC: Array<any>;
  competenciesList: Competency[];
  constructor(
    private competencyService: CompetencyService,
    private toastr: ToastrService,
    private kpiService: KpiService,
  ) { }

  ngOnInit() {
    this.competencyService.getCompetency()
    .snapshotChanges()
    .subscribe(item => {
      this,this.competenciesList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        this.competenciesList.push(x as Competency);
      });
    });
  }
  
  onEdit(name: string){
    
    
    
  }

 
}
