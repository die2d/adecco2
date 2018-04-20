import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase Person
import { Kpi } from '../models/kpi';

@Injectable()
export class KpiService {

  kpiList: AngularFireList<any>;
  kpiListC: AngularFireList<any>;
  selectedKpi: Kpi = new Kpi();

  constructor(private firebase: AngularFireDatabase) { }
  getKpis(){
    return this.kpiList= this.firebase.list('kpis');
  }

  insertKpi(kpi: Kpi){
    this.kpiList.push({
            
      nombre: kpi.nombre,
      objetivo: kpi.objetivo,
      cumplimiento: kpi.cumplimiento,
      porcentaje: kpi.porcentaje,
      
      cargo: kpi.cargo,

      
    })
  }

  updateKpi(kpi: Kpi){
    this.kpiList.update(kpi.$key,{
      nombre: kpi.nombre,
      objetivo: kpi.objetivo,
      cumplimiento: kpi.cumplimiento,
      porcentaje: kpi.porcentaje,

      cargo: kpi.cargo,

      competencias: kpi.competencias
    })
  }

  deleteKpi($key: string){
    this.kpiList.remove($key);
  }
}
