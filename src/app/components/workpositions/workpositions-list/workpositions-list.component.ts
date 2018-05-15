import { Component, OnInit } from '@angular/core';

//service
import {WorkpositionService} from '../../../services/workposition.service';

//toastr
import { ToastrService} from 'ngx-toastr';
import { element } from 'protractor';

//Clase Workposition
import { Workposition } from '../../../models/workposition';


@Component({
  selector: 'app-workpositions-list',
  templateUrl: './workpositions-list.component.html',
  styleUrls: ['./workpositions-list.component.css']
})
export class WorkpositionsListComponent implements OnInit {

  
  p: number = 1;
  workpositionsList: Workposition[];

  constructor(
    private workpositionService: WorkpositionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.workpositionService.getWorkposition()
    .snapshotChanges()
    .subscribe(item => {
      this,this.workpositionsList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        this.workpositionsList.push(x as Workposition);
      });
    });
  }

  onEdit(workposition: Workposition){
    this.workpositionService.selectedWorkposition = Object.assign({}, workposition);
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar el cargo permanentemente?')){
      this.workpositionService.deleteWorkposition($key);
      this.toastr.success('Operacion Completada', 'Cargo Eliminado' );
    }
  }

}

