import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { WorkpositionsComponent } from './components/workpositions/workpositions.component';
import { PersonsComponent } from './components/persons/persons.component';

import { KpisComponent } from './components/kpis//kpis.component';
import { CompetenciesComponent } from './components/competencies/competencies.component';
import { InicioComponent } from './components/inicio/inicio.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'workpositions', component: WorkpositionsComponent },
    { path: 'persons', component: PersonsComponent },
    { path: 'indicadores', component: KpisComponent },
    { path: 'competencias', component: CompetenciesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }