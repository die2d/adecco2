import { Component, OnInit } from '@angular/core';

//service
import {MatrizService} from '../../../services/matriz.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { element } from 'protractor';
import { Matriz } from '../../../models/matriz';
@Component({
  selector: 'app-matriz-list',
  templateUrl: './matriz-list.component.html',
  styleUrls: ['./matriz-list.component.css']
})
export class MatrizListComponent implements OnInit {

  matrizList: Matriz[];
  p4: number = 1;
  constructor(
    private matrizService: MatrizService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    
    this.matrizService.getMatriz()
    .snapshotChanges()
    .subscribe(item => {
      this,this.matrizList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        
        this.matrizList.push(x as Matriz);
      });
    });
    
  
  }

  onEdit(matriz: Matriz){
    this.matrizService.selectedMatriz = Object.assign({}, matriz);
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar a esta matriz permanentemente?')){
      this.matrizService.deleteMatriz($key);
      this.toastr.success('Operacion Completada', 'Matriz Eliminada' );
    }
  }

}
