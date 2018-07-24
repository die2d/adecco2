import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase test
import { Test } from '../models/test';

@Injectable()
export class TestService {
  testList: AngularFireList<any>;
  
  selectedTest: Test = new Test();

  constructor(private firebase: AngularFireDatabase) { }
  getTest(){
    return this.testList= this.firebase.list('tests');
  }


insertTest(test: Test){
  
  this.testList.push({
    cargo: test.cargo,     
    objetivo: test.objetivo,
    cumplimiento: test.cumplimiento,
    calculo: test.calculo,
    porcentaje: test.porcentaje,
    objetivoVal: test.objetivoVal,
    cumplimientoVal: test.cumplimientoVal,
    cedula: test.cedula,
    nombre: test.nombre,
    color: test.color
    
    
  })
}


updateTest(test: Test){
  this.testList.update(test.$key,{
    cargo: test.cargo,     
    objetivo: test.objetivo,
    cumplimiento: test.cumplimiento,
    calculo: test.calculo,
    porcentaje: test.porcentaje,
    objetivoVal: test.objetivoVal,
    cumplimientoVal: test.cumplimientoVal,
    cedula: test.cedula,
    nombre: test.nombre,
    color: test.color
  })
 
}

deletetest($key: string){
  this.testList.remove($key);
}
}
