import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase Workposition

import { Competency } from '../models/competency';

@Injectable()
export class CompetencyService {

  competenciesList: AngularFireList<any>;
  
 
  selectedCompetency: Competency = new Competency();

  constructor(private firebase: AngularFireDatabase) { }
  
  getCompetency(){
    return this.competenciesList = this.firebase.list('competencies');
  }

  insertCompetency(competency: Competency){
    this.competenciesList.push({
      name: competency.name,
    })
    
  }

  updateCompetency(competency: Competency){
    this.competenciesList.update(competency.$key,{
      name: competency.name
    })

  }

  deleteCompetency($key: string){
    this.competenciesList.remove($key);
  }

}
