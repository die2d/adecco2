import { Component, OnInit } from '@angular/core';

//service
import {KpiService} from '../../../services/kpi.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Kpi } from '../../../models/kpi';
import { element } from 'protractor';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.css']
})
export class KpiListComponent implements OnInit {

  kpiList: Kpi[];

  constructor(
    private kpiService: KpiService,
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
    this.kpiService.selectedKpi= Object.assign({}, kpi);
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar a este Kpi permanentemente?')){
      this.kpiService.deleteKpi($key);
      this.toastr.success('Operacion Completada', 'Kpi Eliminado' );
    }
  }

}
