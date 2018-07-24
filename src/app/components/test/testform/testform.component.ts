import { Component, OnInit } from '@angular/core';

//Service
import { TestService } from '../../../services/test.service';
import { ToastrService } from 'ngx-toastr'

import { NgForm } from '@angular/forms';

//Person class
import { Test } from '../../../models/test';
@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  constructor(private testService: TestService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.testService.getTest();
    this.resetForm();
  }
  resetForm(personForm?: NgForm){
    if(personForm != null)
      personForm.reset();
    
    this.testService.selectedTest=new Test();
  }


  onSubmit(testForm: NgForm){
    
      if(testForm.value.calculo=="D"){
        testForm.value.porcentaje =Math.round( (testForm.value.objetivoVal/testForm.value.cumplimientoVal)*100);
      
      }
      else{
        testForm.value.porcentaje = (testForm.value.cumplimientoVal/testForm.value.objetivoVal)*100;  
      }

     

    if( testForm.value.porcentaje > 75){
      
        testForm.value.color = "1";
        
    }
  
    if( testForm.value.porcentaje < 75){
      if( testForm.value.porcentaje >40){
        testForm.value.color = "2";
       
      }
    }

    if( testForm.value.porcentaje <= 40){
      if( testForm.value.porcentaje >=0){
        testForm.value.color = "3";
       }
    }
    
             
      this.testService.insertTest(testForm.value);

      this.toastr.success('Operación Existosa', 'Nueva evaluacion Agregado')
    

    
      this.resetForm(testForm);
  }

  
  }
