import { Component, OnInit } from '@angular/core';

//Service
import { KpiService } from '../../../services/kpi.service';
import { ToastrService } from 'ngx-toastr'

import { NgForm } from '@angular/forms';

//Person class
import { Kpi } from '../../../models/kpi';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {

  constructor(
    private kpiService: KpiService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.kpiService.getKpis();
    this.resetForm();
  }

  onSubmit(kpiForm: NgForm){
    
    if(kpiForm.value.$key == null){
      kpiForm.value.cumplimiento=0;
      kpiForm.value.porcentaje=0;

      this.kpiService.insertKpi(kpiForm.value);
      this.toastr.success('Operación Existosa', 'Nuevo kpi Agregado')
    }
    else{
      kpiForm.value.cumplimiento=0;
      kpiForm.value.porcentaje=0;
      this.kpiService.updateKpi(kpiForm.value);
      this.toastr.success('Operación Existosa', 'kpi ha sido Editada')
    }

    this.resetForm(kpiForm);
    
  }


  resetForm(personForm?: NgForm){
    if(personForm != null)
      personForm.reset();
    
    this.kpiService.selectedKpi=new Kpi();
  }

}
