import { Component, OnInit } from '@angular/core';

//Service
import { CompetencyService } from '../../../services/competency.service';
import { ToastrService } from 'ngx-toastr'

import { NgForm } from '@angular/forms';
import { Competency } from '../../../models/competency';

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {

  constructor(
    private competencyService: CompetencyService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.competencyService.getCompetency();
    this.resetForm();
  }


  onSubmit(competencyForm: NgForm){
    
    if(competencyForm.value.$key == null){
      this.competencyService.insertCompetency(competencyForm.value);
      this.toastr.success('Operación Existosa', 'Nueva competencia agregada')
    }
    else{
      this.competencyService.updateCompetency(competencyForm.value);
      this.competencyService.updateCompetency(competencyForm.value);
      this.toastr.success('Operación Existosa', 'Competencia ha sido Editada')
    
    }
    
    

    this.resetForm(competencyForm);
    
  }


  resetForm(competencyForm?: NgForm){
    if(competencyForm != null)
      competencyForm.reset();
    
    this.competencyService.selectedCompetency=new Competency();
  }

}
