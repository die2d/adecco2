import { Component, OnInit } from '@angular/core';

//Service
import { PersonService } from '../../../services/person.service';
import { ToastrService } from 'ngx-toastr'

import { NgForm } from '@angular/forms';

//Person class
import { Person } from '../../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.personService.getPersons();
    this.resetForm();
   

  }


  onSubmit(personForm: NgForm){
    
    
    if(personForm.value.$key == null){
      
      this.personService.insertPerson(personForm.value);
      this.toastr.success('Operación Existosa', 'Nueva Persona Agregada')
      
    }
    else{
      
      this.personService.updatePerson(personForm.value);
      this.toastr.success('Operación Existosa', 'Persona ha sido Editada')
    }

    this.resetForm(personForm);
    

  }


  resetForm(personForm?: NgForm){
    if(personForm != null  )
      personForm.reset();
    
    this.personService.selectedPerson=new Person();
    //
    
  }
}
