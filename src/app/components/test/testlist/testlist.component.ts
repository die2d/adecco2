import { Component, OnInit } from '@angular/core';
//service
import {TestService} from '../../../services/test.service';

//toastr
import { ToastrService} from 'ngx-toastr';

//Clase Person
import { Test } from '../../../models/test';
import { element } from 'protractor';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {
  testList: Test[];
  constructor(
    private testService: TestService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.testService.getTest()
    .snapshotChanges()
    .subscribe(item => {
      this,this.testList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] =element.key;
        this.testList.push(x as Test);
      });
    });
  }

  onEdit(test: Test){
    this.testService.selectedTest= Object.assign({}, test);
  }

  onDelete($key: string){
    if(confirm('Seguro que desea eliminar a este Eva permanentemente?')){
      this.testService.deletetest($key);
      this.toastr.success('Operacion Completada', 'Eva Eliminado' );
    }
  }

}
