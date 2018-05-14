import { Injectable } from '@angular/core';

//Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase Person
import { Person } from '../models/person';

@Injectable()
export class PersonService {

  personList: AngularFireList<any>;
  selectedPerson: Person = new Person();
  

  constructor(private firebase: AngularFireDatabase) { 
  
  }

  getPersons(){
    return this.personList = this.firebase.list('persons');
  }

  insertPerson(person: Person){
    this.personList.push({
      name: person.name,
      cedula: person.cedula,
      area: person.area,
      estructuraorganizacional: person.estructuraorganizacional,
      estructurafisicacostos: person.estructurafisicacostos,
      cargo: person.cargo,
      ciudad: person.ciudad,
            
    })
    

  }

  updatePerson(person: Person){
    this.personList.update(person.$key,{
      name: person.name,
      cedula: person.cedula,
      area: person.area,
      estructuraorganizacional: person.estructuraorganizacional,
      estructurafisicacostos: person.estructurafisicacostos,
      cargo: person.cargo,
      ciudad: person.ciudad,
    })
   
  }

  deletePerson($key: string){
    this.personList.remove($key);
  }
  
}
