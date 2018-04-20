import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase Workposition
import { Workposition } from '../models/workposition';

@Injectable()
export class WorkpositionService {

  workpositionsList: AngularFireList<any>;
  selectedWorkposition: Workposition = new Workposition();

  constructor(private firebase: AngularFireDatabase) { }
  
  getWorkposition(){
    return this.workpositionsList = this.firebase.list('workpositions');
  }

  insertWorkposition(workposition: Workposition){
    this.workpositionsList.push({
      name: workposition.name,
    })
  }

  updateWorkposition(workposition: Workposition){
    this.workpositionsList.update(workposition.$key,{
      name: workposition.name
    })
  }

  deleteWorkposition($key: string){
    this.workpositionsList.remove($key);
  }
}

