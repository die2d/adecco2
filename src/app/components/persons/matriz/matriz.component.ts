import { Component, OnInit } from '@angular/core';

//Service
import { MatrizService } from '../../../services/matriz.service';
import { ToastrService } from 'ngx-toastr'

import { NgForm } from '@angular/forms';

//Person class

import { Matriz } from '../../../models/matriz';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  constructor(
    private matrizService: MatrizService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.matrizService.getMatriz();
    this.resetForm();
  }


  onSubmit(matrizForm: NgForm){
    
    if(matrizForm.value.$key == null){
      this.matrizService.insertMatriz(matrizForm.value);
      this.toastr.success('Operación Existosa', 'Nueva matriz creada')
      
    }
    else{
      this.matrizService.updateMatriz(matrizForm.value);
      this.toastr.success('Operación Existosa', 'Matriz ha sido Editada')
    }

    this.resetForm(matrizForm);
    
  }


  resetForm(matrizForm?: NgForm){
    if(matrizForm != null)
      matrizForm.reset();
    
    this.matrizService.selectedMatriz=new Matriz();
  }

}
