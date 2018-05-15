import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase Person
import { Person } from '../models/person';

@Injectable()
export class EvaluadoresService {

  personList: AngularFireList<any>;
  selectedPersonEvaluador: Person = new Person();

  constructor(private firebase: AngularFireDatabase) { }

  getPersons(){
    return this.personList = this.firebase.list('evaluadores');
  }

  insertPerson(person: Person){
    this.personList.push({
      name: person.name,
      cedula: person.cedula,
      cargo: person.cargo,    
    })
       

  }

  deletePerson($key: string){
    this.personList.remove($key);
  }

}
