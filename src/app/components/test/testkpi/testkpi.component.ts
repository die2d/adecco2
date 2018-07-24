import { Component, OnInit } from '@angular/core';
//service
import {KpiService} from '../../../services/kpi.service';
import {TestService} from '../../../services/test.service';
//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Kpi } from '../../../models/kpi';
import { element } from 'protractor';
@Component({
  selector: 'app-testkpi',
  templateUrl: './testkpi.component.html',
  styleUrls: ['./testkpi.component.css']
})
export class TestkpiComponent implements OnInit {
  kpiList: Kpi[];
  p22: number = 1;
  constructor(
    private kpiService: KpiService,
    private testService: TestService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.kpiService.getKpis()
    .snapshotChanges()
    .subscribe(item => {
      this,this.kpiList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        this.kpiList.push(x as Kpi);
      });
    });
  }

  onEdit(kpi: Kpi){
    this.testService.selectedTest.cumplimiento=kpi.cumplimiento;
    this.testService.selectedTest.objetivo=kpi.objetivo;
    this.testService.selectedTest.calculo=kpi.calculo;

  }

}
