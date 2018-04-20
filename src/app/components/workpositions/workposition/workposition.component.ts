import { Component, OnInit } from '@angular/core';

//Service
import { WorkpositionService } from '../../../services/workposition.service';
import { ToastrService } from 'ngx-toastr'

import { NgForm } from '@angular/forms';

//Person class
import { Workposition } from '../../../models/workposition';

@Component({
  selector: 'app-workposition',
  templateUrl: './workposition.component.html',
  styleUrls: ['./workposition.component.css']
})
export class WorkpositionComponent implements OnInit {

  constructor(
    private workpositionService: WorkpositionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.workpositionService.getWorkposition();
    this.resetForm();
  }


  onSubmit(workpositionForm: NgForm){
    
    if(workpositionForm.value.$key == null){
      this.workpositionService.insertWorkposition(workpositionForm.value);
      this.toastr.success('Operación Existosa', 'Nuevo cargo Agregada')
    }
    else{
      this.workpositionService.updateWorkposition(workpositionForm.value);
      this.toastr.success('Operación Existosa', 'Cargo ha sido Editada')
    }

    this.resetForm(workpositionForm);
    
  }


  resetForm(personForm?: NgForm){
    if(personForm != null)
      personForm.reset();
    
    this.workpositionService.selectedWorkposition=new Workposition();
  }
}
