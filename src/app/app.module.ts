import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

//animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//toastr
import {ToastrModule} from 'ngx-toastr'

import { AppComponent } from './app.component';


//firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


//components Person
import { PersonsComponent } from './components/persons/persons.component';
import { PersonsListComponent } from './components/persons/persons-list/persons-list.component';
import { PersonComponent } from './components/persons/person/person.component';

//Services Person
import { PersonService} from './services/person.service';

//component Kpi
import { KpisComponent } from './components/kpis/kpis.component';
import { KpiListComponent } from './components/kpis/kpi-list/kpi-list.component';
import { KpiComponent } from './components/kpis/kpi/kpi.component';

// Service kpi
import { KpiService } from './services/kpi.service';
import { WorkpositionsComponent } from './components/workpositions/workpositions.component';
import { WorkpositionComponent } from './components/workpositions/workposition/workposition.component';
import { WorkpositionsListComponent } from './components/workpositions/workpositions-list/workpositions-list.component';
import { WorkpositionService } from './services/workposition.service';
import { CompetenciesComponent } from './components/competencies/competencies.component';
import { CompetencyComponent } from './components/competencies/competency/competency.component';
import { CompetenciesListComponent } from './components/competencies/competencies-list/competencies-list.component';
import { CompetencyService } from './services/competency.service';
import { WorkpositionskpiListComponent } from './components/kpis/workpositionskpi-list/workpositionskpi-list.component';
import { CompetencieskpiListComponent } from './components/kpis/competencieskpi-list/competencieskpi-list.component';
import { EvaluadoresComponent } from './components/persons/evaluadores/evaluadores.component';
import { MatrizComponent } from './components/persons/matriz/matriz.component';
import { EvaluadosComponent } from './components/persons/evaluados/evaluados.component';
import { MatrizListComponent } from './components/persons/matriz-list/matriz-list.component';
import { MatrizService } from './services/matriz.service';
import { WorkpositionspersonListComponent } from './components/persons/workpositionsperson-list/workpositionsperson-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonsListComponent,
    PersonComponent,
    KpisComponent,
    KpiListComponent,
    KpiComponent,
    WorkpositionsComponent,
    WorkpositionComponent,
    WorkpositionsListComponent,
    CompetenciesComponent,
    CompetencyComponent,
    CompetenciesListComponent,
    WorkpositionskpiListComponent,
    CompetencieskpiListComponent,
    EvaluadoresComponent,
    MatrizComponent,
    EvaluadosComponent,
    MatrizListComponent,
    WorkpositionspersonListComponent
    
    
  ],
  imports: [
    BrowserModule,
    //Para referenciar la BD en la app
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  
    //
    FormsModule,
    //
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    //servicios
    PersonService,
    KpiService,
    WorkpositionService,
    CompetencyService,
    MatrizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
