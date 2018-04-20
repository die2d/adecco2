import { Component, OnInit } from '@angular/core';

//service
import {CompetencyService} from '../../../services/competency.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Person } from '../../../models/person';
import { element } from 'protractor';
import { Competency } from '../../../models/competency';
@Component({
  selector: 'app-competencies-list',
  templateUrl: './competencies-list.component.html',
  styleUrls: ['./competencies-list.component.css']
})
export class CompetenciesListComponent implements OnInit {

  competenciesList: Competency[];
  constructor(
    private competencyService: CompetencyService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.competencyService.getCompetency()
    .snapshotChanges()
    .subscribe(item => {
      this,this.competenciesList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        this.competenciesList.push(x as Competency);
      });
    });
  }
  onEdit(competency: Competency){
    this.competencyService.selectedCompetency = Object.assign({}, competency);
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar la competencia permanentemente?')){
      this.competencyService.deleteCompetency($key);
      this.toastr.success('Operacion Completada', 'Competencia Eliminado' );
    }
  }

}

