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
       cargo: kpi.cargo,     
      indicadorMacro: kpi.indicadorMacro,
      indicadorProceso: kpi.indicadorProceso,
      indicador: kpi.indicador,
      objetivo: kpi.objetivo,
      cumplimiento: kpi.cumplimiento,
      calculo: kpi.calculo
      
      
    })
  }

  updateKpi(kpi: Kpi){
    this.kpiList.update(kpi.$key,{
      cargo: kpi.cargo,     
      indicadorMacro: kpi.indicadorMacro,
      indicadorProceso: kpi.indicadorProceso,
      indicador:kpi.indicador,
      objetivo: kpi.objetivo,
      cumplimiento: kpi.cumplimiento,
      calculo: kpi.calculo

    })
  }

  deleteKpi($key: string){
    this.kpiList.remove($key);
  }
}
