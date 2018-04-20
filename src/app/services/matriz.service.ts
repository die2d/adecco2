import { Injectable } from '@angular/core';
//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import { Matriz } from '../models/matriz';

@Injectable()
export class MatrizService {

  matrizList: AngularFireList<any>;
  selectedMatriz: Matriz = new Matriz();

  constructor(private firebase: AngularFireDatabase) { }

  getMatriz(){
    return this.matrizList = this.firebase.list('matriz');
  }

  insertMatriz(matriz: Matriz){
    this.matrizList.push({
      evaluador: matriz.evaluador,
      evaluado: matriz.evaluado
      
         
    })
  }

  updateMatriz(matriz: Matriz){
    this.matrizList.update(matriz.$key,{
      evaluador: matriz.evaluador,
      evaluado: matriz.evaluado
    })
  }

  deleteMatriz($key: string){
    this.matrizList.remove($key);
  }

}
