webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  \n  <div class=\"container\">\n      <div class=\"row\">\n        \n            <div class=\"card-body text-white bg-dark mt-3 mb-3\" style=\"width: 12rem;\">\n\n          \n            <img class=\"card-img-top\" src=\"https://teuno.com/wp-content/uploads/2015/11/teuno-logo-slogan1.png\" alt=\"Card image cap\">\n\n        </div>\n\n        <div class=\"col-md-4\">\n          \n\n\n        </div>\n       \n        <div class=\"card-body text-white bg-danger mt-3 mb-3\" style=\"width: 12rem;\">\n            <img class=\"card-img-top\" src=\"https://www.adecco.com.ec/wp-content/themes/adecco-colombia/images/logo.svg\" alt=\"Card image cap\">\n\n        </div>\n        \n      </div>\n    </div>\n\n  <nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">INICIO</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"workpositions\">Cargos <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"persons\">Personas <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"indicadores\">Indicadores <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"competencias\">Competencias <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"test\">Evaluaciones <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  \n  \n  <router-outlet></router-outlet>\n\n<!--\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a href=\"/\" class=\"navbar-brand\">\n    <i class=\"fas fa-briefcase\"></i>\n    Administración de cargos\n  </a>\n</nav>\n<app-workpositions></app-workpositions>\n\n\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a href=\"/\" class=\"navbar-brand\">\n    <i class=\"fas fa-users\"></i>\n  Administración de Personas\n  </a>\n</nav>\n<app-persons></app-persons>\n\n\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a href=\"/\" class=\"navbar-brand\">\n    <i class=\"fas fa-shopping-cart\"></i>\n   Administracion de Kpis\n   \n </a>\n</nav>\n<app-kpis></app-kpis>\n\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a href=\"/\" class=\"navbar-brand\">\n    <i class=\"fas fa-users\"></i>\n    Administracion de competencias\n  </a>\n</nav>\n<app-competencies></app-competencies>\n\n\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <a href=\"/\" class=\"navbar-brand\">\n        <i class=\"fas fa-file-alt\"></i>\n\n  Designacion de evaluaciones\n  </a>\n</nav>\n\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a href=\"/\" class=\"navbar-brand\">\n    <i class=\"fas fa-clipboard-check\"></i>\n   \n  Evaluacion (Evaluador)\n  </a>\n</nav>\n-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_persons_persons_component__ = __webpack_require__("./src/app/components/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_persons_persons_list_persons_list_component__ = __webpack_require__("./src/app/components/persons/persons-list/persons-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_persons_person_person_component__ = __webpack_require__("./src/app/components/persons/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_kpis_kpis_component__ = __webpack_require__("./src/app/components/kpis/kpis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_kpis_kpi_list_kpi_list_component__ = __webpack_require__("./src/app/components/kpis/kpi-list/kpi-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_kpis_kpi_kpi_component__ = __webpack_require__("./src/app/components/kpis/kpi/kpi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_kpi_service__ = __webpack_require__("./src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_workpositions_workpositions_component__ = __webpack_require__("./src/app/components/workpositions/workpositions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_workpositions_workposition_workposition_component__ = __webpack_require__("./src/app/components/workpositions/workposition/workposition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_workpositions_workpositions_list_workpositions_list_component__ = __webpack_require__("./src/app/components/workpositions/workpositions-list/workpositions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_workposition_service__ = __webpack_require__("./src/app/services/workposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_competencies_competencies_component__ = __webpack_require__("./src/app/components/competencies/competencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_competencies_competency_competency_component__ = __webpack_require__("./src/app/components/competencies/competency/competency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_competencies_competencies_list_competencies_list_component__ = __webpack_require__("./src/app/components/competencies/competencies-list/competencies-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_competency_service__ = __webpack_require__("./src/app/services/competency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_kpis_workpositionskpi_list_workpositionskpi_list_component__ = __webpack_require__("./src/app/components/kpis/workpositionskpi-list/workpositionskpi-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_kpis_competencieskpi_list_competencieskpi_list_component__ = __webpack_require__("./src/app/components/kpis/competencieskpi-list/competencieskpi-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_persons_evaluadores_evaluadores_component__ = __webpack_require__("./src/app/components/persons/evaluadores/evaluadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_persons_matriz_matriz_component__ = __webpack_require__("./src/app/components/persons/matriz/matriz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_persons_evaluados_evaluados_component__ = __webpack_require__("./src/app/components/persons/evaluados/evaluados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_persons_matriz_list_matriz_list_component__ = __webpack_require__("./src/app/components/persons/matriz-list/matriz-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_matriz_service__ = __webpack_require__("./src/app/services/matriz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_persons_workpositionsperson_list_workpositionsperson_list_component__ = __webpack_require__("./src/app/components/persons/workpositionsperson-list/workpositionsperson-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_evaluadores_service__ = __webpack_require__("./src/app/services/evaluadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_inicio_inicio_component__ = __webpack_require__("./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_test_test_component__ = __webpack_require__("./src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_test_testcargos_testcargos_component__ = __webpack_require__("./src/app/components/test/testcargos/testcargos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_test_testkpi_testkpi_component__ = __webpack_require__("./src/app/components/test/testkpi/testkpi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_test_testperson_testperson_component__ = __webpack_require__("./src/app/components/test/testperson/testperson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_test_testform_testform_component__ = __webpack_require__("./src/app/components/test/testform/testform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_test_testlist_testlist_component__ = __webpack_require__("./src/app/components/test/testlist/testlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_test_service__ = __webpack_require__("./src/app/services/test.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//animaciones

//toastr


//rutAS

//firebase 



//components Person



//Services Person

//component Kpi



// Service kpi



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_persons_persons_component__["a" /* PersonsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_persons_persons_list_persons_list_component__["a" /* PersonsListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_persons_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_kpis_kpis_component__["a" /* KpisComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_kpis_kpi_list_kpi_list_component__["a" /* KpiListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_kpis_kpi_kpi_component__["a" /* KpiComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_workpositions_workpositions_component__["a" /* WorkpositionsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_workpositions_workposition_workposition_component__["a" /* WorkpositionComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_workpositions_workpositions_list_workpositions_list_component__["a" /* WorkpositionsListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_competencies_competencies_component__["a" /* CompetenciesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_competencies_competency_competency_component__["a" /* CompetencyComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_competencies_competencies_list_competencies_list_component__["a" /* CompetenciesListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_kpis_workpositionskpi_list_workpositionskpi_list_component__["a" /* WorkpositionskpiListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_kpis_competencieskpi_list_competencieskpi_list_component__["a" /* CompetencieskpiListComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_persons_evaluadores_evaluadores_component__["a" /* EvaluadoresComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_persons_matriz_matriz_component__["a" /* MatrizComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_persons_evaluados_evaluados_component__["a" /* EvaluadosComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_persons_matriz_list_matriz_list_component__["a" /* MatrizListComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_persons_workpositionsperson_list_workpositionsperson_list_component__["a" /* WorkpositionspersonListComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_inicio_inicio_component__["a" /* InicioComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_test_testcargos_testcargos_component__["a" /* TestcargosComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_test_testkpi_testkpi_component__["a" /* TestkpiComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_test_testperson_testperson_component__["a" /* TestpersonComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_test_testform_testform_component__["a" /* TestformComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_test_testlist_testlist_component__["a" /* TestlistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //Para referenciar la BD en la app
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_37_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                //
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__["Ng2OrderModule"],
                //
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* AppRoutingModule */]
            ],
            providers: [
                //servicios
                __WEBPACK_IMPORTED_MODULE_15__services_person_service__["a" /* PersonService */],
                __WEBPACK_IMPORTED_MODULE_19__services_kpi_service__["a" /* KpiService */],
                __WEBPACK_IMPORTED_MODULE_23__services_workposition_service__["a" /* WorkpositionService */],
                __WEBPACK_IMPORTED_MODULE_27__services_competency_service__["a" /* CompetencyService */],
                __WEBPACK_IMPORTED_MODULE_34__services_matriz_service__["a" /* MatrizService */],
                __WEBPACK_IMPORTED_MODULE_36__services_evaluadores_service__["a" /* EvaluadoresService */],
                __WEBPACK_IMPORTED_MODULE_45__services_test_service__["a" /* TestService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_workpositions_workpositions_component__ = __webpack_require__("./src/app/components/workpositions/workpositions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_persons_persons_component__ = __webpack_require__("./src/app/components/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_kpis_kpis_component__ = __webpack_require__("./src/app/components/kpis/kpis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_competencies_competencies_component__ = __webpack_require__("./src/app/components/competencies/competencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inicio_inicio_component__ = __webpack_require__("./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_test_test_component__ = __webpack_require__("./src/app/components/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var APP_ROUTES = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_6__components_inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'workpositions', component: __WEBPACK_IMPORTED_MODULE_2__components_workpositions_workpositions_component__["a" /* WorkpositionsComponent */] },
    { path: 'persons', component: __WEBPACK_IMPORTED_MODULE_3__components_persons_persons_component__["a" /* PersonsComponent */] },
    { path: 'indicadores', component: __WEBPACK_IMPORTED_MODULE_4__components_kpis_kpis_component__["a" /* KpisComponent */] },
    { path: 'competencias', component: __WEBPACK_IMPORTED_MODULE_5__components_competencies_competencies_component__["a" /* CompetenciesComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_7__components_test_test_component__["a" /* TestComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/competencies/competencies-list/competencies-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/competencies/competencies-list/competencies-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> Lista de competencias</h6>\n    <table class=\"table table-sm table-hover \">\n      \n      <tbody>\n          <tr *ngFor =\"let competency of competenciesList\">\n          <td>{{competency.name}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(competency)\">\n              <i class=\"far fa-edit\"></i>\n              Editar\n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(competency.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n              Borrar\n            </a>\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/competencies/competencies-list/competencies-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetenciesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_competency_service__ = __webpack_require__("./src/app/services/competency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

var CompetenciesListComponent = /** @class */ (function () {
    function CompetenciesListComponent(competencyService, toastr) {
        this.competencyService = competencyService;
        this.toastr = toastr;
    }
    CompetenciesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.competencyService.getCompetency()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.competenciesList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.competenciesList.push(x);
            });
        });
    };
    CompetenciesListComponent.prototype.onEdit = function (competency) {
        this.competencyService.selectedCompetency = Object.assign({}, competency);
    };
    CompetenciesListComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar la competencia permanentemente?')) {
            this.competencyService.deleteCompetency($key);
            this.toastr.success('Operacion Completada', 'Competencia Eliminado');
        }
    };
    CompetenciesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-competencies-list',
            template: __webpack_require__("./src/app/components/competencies/competencies-list/competencies-list.component.html"),
            styles: [__webpack_require__("./src/app/components/competencies/competencies-list/competencies-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_competency_service__["a" /* CompetencyService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], CompetenciesListComponent);
    return CompetenciesListComponent;
}());



/***/ }),

/***/ "./src/app/components/competencies/competencies.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/competencies/competencies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <app-competency></app-competency>\n    </div>\n    <div class=\"col-md-8 text-center\">\n      <app-competencies-list></app-competencies-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/competencies/competencies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetenciesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompetenciesComponent = /** @class */ (function () {
    function CompetenciesComponent() {
    }
    CompetenciesComponent.prototype.ngOnInit = function () {
    };
    CompetenciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-competencies',
            template: __webpack_require__("./src/app/components/competencies/competencies.component.html"),
            styles: [__webpack_require__("./src/app/components/competencies/competencies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompetenciesComponent);
    return CompetenciesComponent;
}());



/***/ }),

/***/ "./src/app/components/competencies/competency/competency.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/competencies/competency/competency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5 bg-dark\">\n  <div class=\"card-body\">\n    <form #competencyForm=\"ngForm\" (ngSubmit)=\"onSubmit(competencyForm)\">\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"competencyService.selectedCompetency.$key\">\n\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"name\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"competencyService.selectedCompetency.name\"\n          placeholder=\"Agrega el nombre de la competencia\"\n        >\n      </div>\n      \n    \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">\n          <i class=\"fas fa-plus-circle\"></i> Agregar\n        </button>\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(personForm)\">\n          <i class=\"fas fa-sync-alt\"></i> Limpiar\n        </button>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/competencies/competency/competency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_competency_service__ = __webpack_require__("./src/app/services/competency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_competency__ = __webpack_require__("./src/app/models/competency.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Service



var CompetencyComponent = /** @class */ (function () {
    function CompetencyComponent(competencyService, toastr) {
        this.competencyService = competencyService;
        this.toastr = toastr;
    }
    CompetencyComponent.prototype.ngOnInit = function () {
        this.competencyService.getCompetency();
        this.resetForm();
    };
    CompetencyComponent.prototype.onSubmit = function (competencyForm) {
        if (competencyForm.value.$key == null) {
            this.competencyService.insertCompetency(competencyForm.value);
            this.toastr.success('Operación Existosa', 'Nueva competencia agregada');
        }
        else {
            this.competencyService.updateCompetency(competencyForm.value);
            this.competencyService.updateCompetency(competencyForm.value);
            this.toastr.success('Operación Existosa', 'Competencia ha sido Editada');
        }
        this.resetForm(competencyForm);
    };
    CompetencyComponent.prototype.resetForm = function (competencyForm) {
        if (competencyForm != null)
            competencyForm.reset();
        this.competencyService.selectedCompetency = new __WEBPACK_IMPORTED_MODULE_3__models_competency__["a" /* Competency */]();
    };
    CompetencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-competency',
            template: __webpack_require__("./src/app/components/competencies/competency/competency.component.html"),
            styles: [__webpack_require__("./src/app/components/competencies/competency/competency.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_competency_service__["a" /* CompetencyService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], CompetencyComponent);
    return CompetencyComponent;
}());



/***/ }),

/***/ "./src/app/components/inicio/inicio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"card-header\">\n    Featured\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Version 0.34</h5>\n    <p class=\"card-text\">APP en estado de pruebas</p>\n    <a href=\"workpositions\" class=\"btn btn-primary\">Probar</a>\n  </div>\n  <div class=\"card-footer text-muted\">\n    1 days ago\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__("./src/app/components/inicio/inicio.component.html"),
            styles: [__webpack_require__("./src/app/components/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/kpis/competencieskpi-list/competencieskpi-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kpis/competencieskpi-list/competencieskpi-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> Lista de Competencias</h6>\n    <table class=\"table table-sm table-hover table-warning\">\n      \n      <tbody>\n          <tr *ngFor =\"let competency of competenciesList\">\n          <td>{{competency.name}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(competency.name)\">\n              <i class=\"far fa-edit\"></i>\n              Relacionar\n            </a>\n           <!-- <a class=\"btn btn-danger text-white\" (click)=\"onDelete(workposition.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n              Borrar\n            </a>-->\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/kpis/competencieskpi-list/competencieskpi-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetencieskpiListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_kpi_service__ = __webpack_require__("./src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_competency_service__ = __webpack_require__("./src/app/services/competency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//service

//toastr

var CompetencieskpiListComponent = /** @class */ (function () {
    function CompetencieskpiListComponent(competencyService, toastr, kpiService) {
        this.competencyService = competencyService;
        this.toastr = toastr;
        this.kpiService = kpiService;
    }
    CompetencieskpiListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.competencyService.getCompetency()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.competenciesList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.competenciesList.push(x);
            });
        });
    };
    CompetencieskpiListComponent.prototype.onEdit = function (name) {
    };
    CompetencieskpiListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-competencieskpi-list',
            template: __webpack_require__("./src/app/components/kpis/competencieskpi-list/competencieskpi-list.component.html"),
            styles: [__webpack_require__("./src/app/components/kpis/competencieskpi-list/competencieskpi-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_competency_service__["a" /* CompetencyService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__services_kpi_service__["a" /* KpiService */]])
    ], CompetencieskpiListComponent);
    return CompetencieskpiListComponent;
}());



/***/ }),

/***/ "./src/app/components/kpis/kpi-list/kpi-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kpis/kpi-list/kpi-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> Lista de Kpis</h6>\n\n    <nav class=\"navbar\">\n      <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n    </nav>\n    <table class=\"table table-sm table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Indicador Macro</th>\n          <th scope=\"col\">Indicador por proceso</th>\n          <th scope=\"col\">Indicador</th>\n          \n          <th scope=\"col\">Cargo</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor =\"let kpi of kpiList |filter:filter |paginate: { itemsPerPage: 10, currentPage: p11, id: 'eleven' }; let i = index\">\n          \n          \n          <td>{{kpi.indicadorMacro}}</td> \n          <td>{{kpi.indicadorProceso}}</td> \n          <td>{{kpi.indicador}}</td>\n          \n          <td>{{kpi.cargo}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(kpi)\">\n              <i class=\"far fa-edit\"></i>\n      \n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(kpi.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n                       </a>\n          </td>\n\n        </tr>\n      </tbody>\n      \n    </table>\n    <pagination-controls (pageChange)=\"p11 =$event\" id=\"eleven\"></pagination-controls>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/kpis/kpi-list/kpi-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpiListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_kpi_service__ = __webpack_require__("./src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

var KpiListComponent = /** @class */ (function () {
    function KpiListComponent(kpiService, toastr) {
        this.kpiService = kpiService;
        this.toastr = toastr;
        this.p11 = 1;
    }
    KpiListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kpiService.getKpis()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.kpiList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.kpiList.push(x);
            });
        });
    };
    KpiListComponent.prototype.onEdit = function (kpi) {
        this.kpiService.selectedKpi = Object.assign({}, kpi);
    };
    KpiListComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar a este Kpi permanentemente?')) {
            this.kpiService.deleteKpi($key);
            this.toastr.success('Operacion Completada', 'Kpi Eliminado');
        }
    };
    KpiListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kpi-list',
            template: __webpack_require__("./src/app/components/kpis/kpi-list/kpi-list.component.html"),
            styles: [__webpack_require__("./src/app/components/kpis/kpi-list/kpi-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_kpi_service__["a" /* KpiService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], KpiListComponent);
    return KpiListComponent;
}());



/***/ }),

/***/ "./src/app/components/kpis/kpi/kpi.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kpis/kpi/kpi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5 bg-light\">\n  <div class=\"card-body\">\n    <form #kpiForm=\"ngForm\" (ngSubmit)=\"onSubmit(kpiForm)\">\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"kpiService.selectedKpi.$key\">\n      <!--<input type=\"text\"  name=\"cargo\" #name=\"ngModel\" [(ngModel)]=\"kpiService.selectedKpi.cargo\">-->\n \n      \n\n      <div class=\"form-group\">\n        <input \n        readonly\n          type=\"text\"\n          class=\"form-control\" \n          name=\"cargo\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.cargo\"\n          placeholder=\"Selecciona el cargo de la lista\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"indicadorMacro\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.indicadorMacro\"\n          placeholder=\"Agrega el indicador macro\"\n        >\n      </div>\n      \n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"indicadorProceso\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.indicadorProceso\"\n          placeholder=\"Agrega el indicador por proceso\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"indicador\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.indicador\"\n          placeholder=\"Agrega el indicador Principal\"\n        >\n      </div>\n      \n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"objetivo\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.objetivo\"\n          placeholder=\"Descripción de la base objetivo\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"cumplimiento\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.cumplimiento\"\n          placeholder=\"Descripción del valor de cumplimiento\"\n        >\n      </div>\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"calculo\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"kpiService.selectedKpi.calculo\"\n          placeholder=\"Agrega el tipo de calculo D / I\"\n        >\n      </div>\n    \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">\n          <i class=\"fas fa-plus-circle\"></i> Agregar kpi\n        </button>\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(kpiForm)\">\n          <i class=\"fas fa-sync-alt\"></i> Limpiar\n        </button>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/kpis/kpi/kpi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_kpi_service__ = __webpack_require__("./src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_kpi__ = __webpack_require__("./src/app/models/kpi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Service


//Person class

var KpiComponent = /** @class */ (function () {
    function KpiComponent(kpiService, toastr) {
        this.kpiService = kpiService;
        this.toastr = toastr;
    }
    KpiComponent.prototype.ngOnInit = function () {
        this.kpiService.getKpis();
        this.resetForm();
    };
    KpiComponent.prototype.onSubmit = function (kpiForm) {
        if (kpiForm.value.$key == null) {
            this.kpiService.insertKpi(kpiForm.value);
            this.toastr.success('Operación Existosa', 'Nuevo kpi Agregado');
        }
        else {
            this.kpiService.updateKpi(kpiForm.value);
            this.toastr.success('Operación Existosa', 'kpi ha sido Editada');
        }
        this.resetForm(kpiForm);
    };
    KpiComponent.prototype.resetForm = function (personForm) {
        if (personForm != null)
            personForm.reset();
        this.kpiService.selectedKpi = new __WEBPACK_IMPORTED_MODULE_3__models_kpi__["a" /* Kpi */]();
    };
    KpiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kpi',
            template: __webpack_require__("./src/app/components/kpis/kpi/kpi.component.html"),
            styles: [__webpack_require__("./src/app/components/kpis/kpi/kpi.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_kpi_service__["a" /* KpiService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], KpiComponent);
    return KpiComponent;
}());



/***/ }),

/***/ "./src/app/components/kpis/kpis.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kpis/kpis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <app-kpi></app-kpi>\n    </div>\n    <div class=\"col-md-8 text-center\">\n      <app-workpositionskpi-list></app-workpositionskpi-list>\n    </div>\n    <!--<div class=\"col-md-4 text-center\">\n    <app-competencieskpi-list></app-competencieskpi-list></div>-->\n    <div class=\"col-md-20 text-center\">\n      <app-kpi-list></app-kpi-list>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/kpis/kpis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KpisComponent = /** @class */ (function () {
    function KpisComponent() {
    }
    KpisComponent.prototype.ngOnInit = function () {
    };
    KpisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kpis',
            template: __webpack_require__("./src/app/components/kpis/kpis.component.html"),
            styles: [__webpack_require__("./src/app/components/kpis/kpis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KpisComponent);
    return KpisComponent;
}());



/***/ }),

/***/ "./src/app/components/kpis/workpositionskpi-list/workpositionskpi-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kpis/workpositionskpi-list/workpositionskpi-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> Lista de Cargos</h6>\n    <table class=\"table table-sm table-hover table-warning\">\n      \n      <tbody>\n          <tr *ngFor =\"let workposition of workpositionsList\">\n          <td>{{workposition.name}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(workposition.name)\">\n              <i class=\"far fa-edit\"></i>\n              Relacionar\n            </a>\n           <a class=\"btn btn-danger text-white\" (click)=\"onDelete(workposition.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n              Borrar\n            </a>\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n-->\n\n\n<div class=\"card mt-3 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> LISTA DE CARGOS</h6>\n    \n    <nav class=\"navbar\">\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n      </nav>\n    <table class=\"table table-sm table-hover table-light\">\n      \n      <tbody>\n          \n\n            <thead>\n                <tr>\n                  \n                  \n                </tr>\n              </thead>\n          <tr *ngFor =\"let workposition of workpositionsList |filter:filter |paginate: { itemsPerPage: 5, currentPage: p10, id: 'ten' }; let i = index\">\n          <td>{{workposition.name}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(workposition.name)\">\n              <i class=\"far fa-edit\"></i>\n            \n            </a>\n            \n          </td>\n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p10 = $event\" id=\"ten\"></pagination-controls>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/kpis/workpositionskpi-list/workpositionskpi-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkpositionskpiListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workposition_service__ = __webpack_require__("./src/app/services/workposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_kpi_service__ = __webpack_require__("./src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

//toastr

var WorkpositionskpiListComponent = /** @class */ (function () {
    function WorkpositionskpiListComponent(workpositionService, kpiService, toastr) {
        this.workpositionService = workpositionService;
        this.kpiService = kpiService;
        this.toastr = toastr;
        this.p10 = 1;
    }
    WorkpositionskpiListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workpositionService.getWorkposition()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.workpositionsList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.workpositionsList.push(x);
            });
        });
    };
    WorkpositionskpiListComponent.prototype.onEdit = function (cargo) {
        this.kpiService.selectedKpi.cargo = cargo;
    };
    WorkpositionskpiListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workpositionskpi-list',
            template: __webpack_require__("./src/app/components/kpis/workpositionskpi-list/workpositionskpi-list.component.html"),
            styles: [__webpack_require__("./src/app/components/kpis/workpositionskpi-list/workpositionskpi-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_workposition_service__["a" /* WorkpositionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_kpi_service__["a" /* KpiService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], WorkpositionskpiListComponent);
    return WorkpositionskpiListComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/evaluadores/evaluadores.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/evaluadores/evaluadores.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card  mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"text-center\"> Lista de Evaluadores</h6>\n    <nav class=\"navbar\">\n        <input placeholder=\"Escribe el evaluador a buscar\" class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n      </nav>\n    <table class=\"table table-sm table-hover\">\n      \n      <tbody>\n          <tr *ngFor =\"let person of personListEvaluadores| filter:filter |  paginate: { itemsPerPage: 5, currentPage: p6, id: 'seis' }; let i = index\">\n          <td>{{person.name}}</td>\n          <td>{{person.cargo}}</td> \n          \n          <td>\n            <a class=\"btn btn-success text-white\" (click)=\"onEdit(person.name)\">\n              <i class=\"far fa-hand-pointer\"></i>\n               \n            </a>\n            \n          </td>\n\n          <td>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(person.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n              \n            </a>\n          </td>\n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p6 = $event\" id=\"seis\"></pagination-controls>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/persons/evaluadores/evaluadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_evaluadores_service__ = __webpack_require__("./src/app/services/evaluadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_matriz_service__ = __webpack_require__("./src/app/services/matriz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service


//toastr

var EvaluadoresComponent = /** @class */ (function () {
    function EvaluadoresComponent(evaluadoresService, matrizService, toastr) {
        this.evaluadoresService = evaluadoresService;
        this.matrizService = matrizService;
        this.toastr = toastr;
        this.p6 = 1;
    }
    EvaluadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evaluadoresService.getPersons()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.personListEvaluadores = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.personListEvaluadores.push(x);
            });
        });
    };
    EvaluadoresComponent.prototype.onEdit = function (evaluador) {
        this.matrizService.selectedMatriz.evaluador = evaluador;
    };
    EvaluadoresComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar la propiedad evaluador de esta personapermanentemente?')) {
            this.evaluadoresService.deletePerson($key);
            this.toastr.success('Operacion Completada', 'Persona Eliminada');
        }
    };
    EvaluadoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evaluadores',
            template: __webpack_require__("./src/app/components/persons/evaluadores/evaluadores.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/evaluadores/evaluadores.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_evaluadores_service__["a" /* EvaluadoresService */],
            __WEBPACK_IMPORTED_MODULE_2__services_matriz_service__["a" /* MatrizService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], EvaluadoresComponent);
    return EvaluadoresComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/evaluados/evaluados.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/evaluados/evaluados.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"text-center\"> Lista de Empleados a evaluar</h6>\n    <nav class=\"navbar\">\n        <input placeholder=\"Escribe el evaluado a buscar\" class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n      </nav>\n    <table class=\"table table-sm table-hover\">\n      \n      <tbody>\n          <tr *ngFor =\"let person of personListEvaluados | filter:filter|  paginate: { itemsPerPage: 5, currentPage: p5, id: 'cinco' }; let i = index\">\n          <td>{{person.name}}</td>\n          <td>{{person.cargo}}</td> \n          \n          <td>\n            <a class=\"btn btn-success text-white\" (click)=\"onEdit(person.name)\">\n              <i class=\"far fa-hand-pointer\"></i>\n              \n            </a>\n           </td>\n           \n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p5 = $event\" id=\"cinco\"></pagination-controls>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/persons/evaluados/evaluados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_matriz_service__ = __webpack_require__("./src/app/services/matriz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service


//toastr

var EvaluadosComponent = /** @class */ (function () {
    function EvaluadosComponent(personService, toastr, matrizService) {
        this.personService = personService;
        this.toastr = toastr;
        this.matrizService = matrizService;
        this.p5 = 1;
    }
    EvaluadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.getPersons()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.personListEvaluados = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.personListEvaluados.push(x);
            });
        });
    };
    EvaluadosComponent.prototype.onEdit = function (evaluado) {
        this.matrizService.selectedMatriz.evaluado = evaluado;
    };
    EvaluadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-evaluados',
            template: __webpack_require__("./src/app/components/persons/evaluados/evaluados.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/evaluados/evaluados.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__services_matriz_service__["a" /* MatrizService */]])
    ], EvaluadosComponent);
    return EvaluadosComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/matriz-list/matriz-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/matriz-list/matriz-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"text-center\"> Matriz de Evaluaciones</h6>\n    <table class=\"table table-sm table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Evaluador</th>\n          <th scope=\"col\">Persona a Evaluar</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor =\"let matriz of matrizList |  paginate: { itemsPerPage: 4, currentPage: p4, id: 'cuatro' }; let i = index\">\n          <td>{{matriz.evaluador}}</td>\n          <td>{{matriz.evaluado}}</td> \n          \n          \n          <td>\n              <a class=\"btn btn-info text-white\" (click)=\"onEdit(matriz)\">\n              <i class=\"far fa-edit\"></i>\n              \n              </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(matriz.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n             \n            </a>\n          </td>\n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p4 = $event\" id=\"cuatro\"></pagination-controls>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/persons/matriz-list/matriz-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrizListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_matriz_service__ = __webpack_require__("./src/app/services/matriz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

var MatrizListComponent = /** @class */ (function () {
    function MatrizListComponent(matrizService, toastr) {
        this.matrizService = matrizService;
        this.toastr = toastr;
        this.p4 = 1;
    }
    MatrizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matrizService.getMatriz()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.matrizList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.matrizList.push(x);
            });
        });
    };
    MatrizListComponent.prototype.onEdit = function (matriz) {
        this.matrizService.selectedMatriz = Object.assign({}, matriz);
    };
    MatrizListComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar a esta matriz permanentemente?')) {
            this.matrizService.deleteMatriz($key);
            this.toastr.success('Operacion Completada', 'Matriz Eliminada');
        }
    };
    MatrizListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-matriz-list',
            template: __webpack_require__("./src/app/components/persons/matriz-list/matriz-list.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/matriz-list/matriz-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_matriz_service__["a" /* MatrizService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], MatrizListComponent);
    return MatrizListComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/matriz/matriz.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/matriz/matriz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 bg-dark\">\n  <div class=\"card-body\">\n    <form #matrizForm=\"ngForm\" (ngSubmit)=\"onSubmit(matrizForm)\">\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"matrizService.selectedMatriz.$key\">\n\n      <div class=\"form-group\">\n        <input \n        readonly\n          type=\"text\"\n          class=\"form-control\" \n          name=\"evaluador\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"matrizService.selectedMatriz.evaluador\"\n          placeholder=\"Seleccione un evaluador de la lista\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <input readonly \n          type=\"text\"\n          class=\"form-control\" \n          name=\"evaluado\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"matrizService.selectedMatriz.evaluado\"\n          placeholder=\"Seleccione un evaluado de la lista\"\n        >\n      </div>\n    \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">\n          <i class=\"fas fa-plus-circle\"></i> Agregar Matriz\n        </button>\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(personForm)\">\n          <i class=\"fas fa-sync-alt\"></i> Limpiar\n        </button>\n        </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/persons/matriz/matriz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_matriz_service__ = __webpack_require__("./src/app/services/matriz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_matriz__ = __webpack_require__("./src/app/models/matriz.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Service


//Person class

var MatrizComponent = /** @class */ (function () {
    function MatrizComponent(matrizService, toastr) {
        this.matrizService = matrizService;
        this.toastr = toastr;
    }
    MatrizComponent.prototype.ngOnInit = function () {
        this.matrizService.getMatriz();
        this.resetForm();
    };
    MatrizComponent.prototype.onSubmit = function (matrizForm) {
        if (matrizForm.value.$key == null) {
            this.matrizService.insertMatriz(matrizForm.value);
            this.toastr.success('Operación Existosa', 'Nueva matriz creada');
        }
        else {
            this.matrizService.updateMatriz(matrizForm.value);
            this.toastr.success('Operación Existosa', 'Matriz ha sido Editada');
        }
        this.resetForm(matrizForm);
    };
    MatrizComponent.prototype.resetForm = function (matrizForm) {
        if (matrizForm != null)
            matrizForm.reset();
        this.matrizService.selectedMatriz = new __WEBPACK_IMPORTED_MODULE_3__models_matriz__["a" /* Matriz */]();
    };
    MatrizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-matriz',
            template: __webpack_require__("./src/app/components/persons/matriz/matriz.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/matriz/matriz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_matriz_service__["a" /* MatrizService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], MatrizComponent);
    return MatrizComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/person/person.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5 bg-light\">\n  <div class=\"card-body\">\n    <form #personForm=\"ngForm\" (ngSubmit)=\"onSubmit(personForm)\">\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"personService.selectedPerson.$key\">\n\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"cedula\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"personService.selectedPerson.cedula\"\n          placeholder=\"Agrega el numero de cedula\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n          <input \n            type=\"text\"\n            class=\"form-control\" \n            name=\"name\"\n            #name=\"ngModel\"\n            [(ngModel)]=\"personService.selectedPerson.name\"\n            placeholder=\"Agrega el nombre de la persona\"\n          >\n      </div>\n<!--readonly-->\n      <div class=\"form-group\">\n            <input \n            readonly\n              type=\"text\"\n              class=\"form-control\" \n              name=\"cargo\"\n              #name=\"ngModel\"\n              [(ngModel)]=\"personService.selectedPerson.cargo\"\n              placeholder=\"Selecciona un cargo de la Lista\"\n            >\n      </div>\n\n      <div class=\"form-group\">\n          <input \n            type=\"text\"\n            class=\"form-control\" \n            name=\"estructurafisicacostos\"\n            #name=\"ngModel\"\n            [(ngModel)]=\"personService.selectedPerson.estructurafisicacostos\"\n            placeholder=\"Agrega la estructura física de costos\"\n          >\n        </div>\n\n        <div class=\"form-group\">\n            <input \n              type=\"text\"\n              class=\"form-control\" \n              name=\"estructuraorganizacional\"\n              #name=\"ngModel\"\n              [(ngModel)]=\"personService.selectedPerson.estructuraorganizacional\"\n              placeholder=\"Agrega la estructura organizacional\"\n            >\n          </div>\n\n        \n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"area\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"personService.selectedPerson.area\"\n          placeholder=\"Agrega el area\"\n        >\n      </div>\n\n\n      <div class=\"form-group\">\n          <input  \n            type=\"text\"\n            class=\"form-control\" \n            name=\"ciudad\"\n            #name=\"ngModel\"\n            [(ngModel)]=\"personService.selectedPerson.ciudad\"\n            placeholder=\"Selecciona una sucursal\"\n          >\n        </div>\n      \n      \n      \n      \n<!--\n\n\n \n\n\n      <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <label class=\"input-group-text\" for=\"inputGroupSelect01\">Ciudad</label>\n          </div>\n          <select name=\"ciudad\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"personService.selectedPerson.ciudad\"\n          class=\"custom-select\">\n            <option value=\"Quito\">Quito</option>\n            <option value=\"Guayaquil\">Guayaquil</option>\n            <option value=\"Cuenca\">Cuenca</option>\n            <option value=\"Loja\">Loja</option>\n            <option value=\"Napo\">Napo</option>\n          </select>\n        </div>\n\n        <div class=\"col-sm-10 mb-3 mt-6\">\n          <div class=\"form-check mt-4\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"false\" checked  name=\"evaluador\"\n            #name=\"ngModel\"\n            [(ngModel)]=\"personService.selectedPerson.evaluador\">\n            <label class=\"form-check-label\" for=\"gridRadios1\">\n              Evaluado\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"true\"  name=\"evaluador\"\n            #name=\"ngModel\"\n            [(ngModel)]=\"personService.selectedPerson.evaluador\">\n            <label class=\"form-check-label\" for=\"gridRadios2\">\n              Evaluador\n            </label>\n          </div>\n        </div>\n        -->\n     \n\n    \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">\n          <i class=\"fas fa-plus-circle\"></i> Agregar\n        </button>\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(personForm)\">\n          <i class=\"fas fa-sync-alt\"></i> Limpiar\n        </button>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/persons/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_person__ = __webpack_require__("./src/app/models/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Service


//Person class

var PersonComponent = /** @class */ (function () {
    function PersonComponent(personService, toastr) {
        this.personService = personService;
        this.toastr = toastr;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.personService.getPersons();
        this.resetForm();
    };
    PersonComponent.prototype.onSubmit = function (personForm) {
        if (personForm.value.$key == null) {
            this.personService.insertPerson(personForm.value);
            this.toastr.success('Operación Existosa', 'Nueva Persona Agregada');
        }
        else {
            this.personService.updatePerson(personForm.value);
            this.toastr.success('Operación Existosa', 'Persona ha sido Editada');
        }
        this.resetForm(personForm);
    };
    PersonComponent.prototype.resetForm = function (personForm) {
        if (personForm != null)
            personForm.reset();
        this.personService.selectedPerson = new __WEBPACK_IMPORTED_MODULE_3__models_person__["a" /* Person */]();
        //
    };
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-person',
            template: __webpack_require__("./src/app/components/persons/person/person.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/persons-list/persons-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/persons-list/persons-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"text-center\"> Lista de Personas</h6>\n    <nav class=\"navbar\">\n        <input placeholder=\"Escribe el nombre de la persona a buscar\" class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n      </nav>\n    <table class=\"table table-sm table-hover\">\n      \n      <tbody>\n          <tr *ngFor =\"let person of personList| filter:filter |  paginate: { itemsPerPage: 9, currentPage: p3, id: 'tres' }; let i = index\">\n          <td>{{person.name}}</td>\n          <td>{{person.cargo}}</td> \n          <td>{{person.cedula}}</td>\n          <td>{{person.ciudad}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(person)\">\n              <i class=\"far fa-edit\"></i>\n            \n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(person.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n              \n            </a>\n          </td>\n          <td>\n            <a class=\"btn btn-success text-white\" (click)=\"onEvaluador(person)\" >\n              <i class=\"fas fa-anchor\"></i>\n              \n            </a>\n          </td>\n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p3 = $event\" id=\"tres\"></pagination-controls>\n\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/persons/persons-list/persons-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_evaluadores_service__ = __webpack_require__("./src/app/services/evaluadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service


//toastr

var PersonsListComponent = /** @class */ (function () {
    function PersonsListComponent(personService, evaluadoresService, toastr) {
        this.personService = personService;
        this.evaluadoresService = evaluadoresService;
        this.toastr = toastr;
        this.p3 = 1;
    }
    PersonsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.getPersons()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.personList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.personList.push(x);
            });
        });
    };
    PersonsListComponent.prototype.onEdit = function (person) {
        this.personService.selectedPerson = Object.assign({}, person);
    };
    PersonsListComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar a esta persona permanentemente?')) {
            this.personService.deletePerson($key);
            this.toastr.success('Operacion Completada', 'Persona Eliminada');
        }
    };
    PersonsListComponent.prototype.onEvaluador = function (person) {
        this.evaluadoresService.insertPerson(person);
        this.toastr.success('Operación Existosa', 'Nueva evluador Agregada');
    };
    PersonsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-persons-list',
            template: __webpack_require__("./src/app/components/persons/persons-list/persons-list.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/persons-list/persons-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_2__services_evaluadores_service__["a" /* EvaluadoresService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], PersonsListComponent);
    return PersonsListComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/persons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/persons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-person></app-person>\n    </div>\n    <div class=\"col-md-7 text-center\">\n        <app-workpositionsperson-list></app-workpositionsperson-list>\n      </div>\n    <div class=\"col-md-12 text-center\">\n      <app-persons-list></app-persons-list>\n    </div>\n   \n  </div>\n</div>\n<nav class=\"navbar navbar-dark bg-dark\">\n  <a href=\"/\" class=\"navbar-brand\">\n    <i class=\"fab fa-connectdevelop\"></i>\n    Matriz de Evaluación\n  </a>\n</nav>\n\n\n<div class=\"container\">\n  <div class=\"row\"> \n    <div class=\"col-md-12 text-center\">\n      <app-matriz></app-matriz>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-evaluadores></app-evaluadores>\n    </div>\n    \n    <div class=\"col-md-6\">\n      <app-evaluados></app-evaluados>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-12 text-center\">\n    <app-matriz-list></app-matriz-list>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/persons/persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonsComponent = /** @class */ (function () {
    function PersonsComponent() {
    }
    PersonsComponent.prototype.ngOnInit = function () {
    };
    PersonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-persons',
            template: __webpack_require__("./src/app/components/persons/persons.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/persons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonsComponent);
    return PersonsComponent;
}());



/***/ }),

/***/ "./src/app/components/persons/workpositionsperson-list/workpositionsperson-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/persons/workpositionsperson-list/workpositionsperson-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n    <div class=\"card-body\">\n      <h6 class=\"test-center\"> Lista de Cargos</h6>\n      <nav class=\"navbar\">\n          <input placeholder=\"Escribe el cargo a buscar\" class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n        </nav>\n      <table class=\"table table-sm table-hover table-light\">\n        \n        \n        <tbody>\n            \n                <tr *ngFor =\"let workposition of workpositionsList | filter:filter| paginate: { itemsPerPage: 7, currentPage: p2, id: 'second' }; let i = index\">\n\n            <td>{{workposition.name}}</td>\n            <td>\n              <a class=\"btn btn-success text-white\" (click)=\"onEdit(workposition.name)\">\n                <i class=\"far fa-edit\"></i>\n                Seleccionar\n              </a>\n             <!-- <a class=\"btn btn-danger text-white\" (click)=\"onDelete(workposition.$key)\" >\n                <i class=\"fas fa-trash-alt\"></i>\n                Borrar\n              </a>-->\n            </td>\n  \n          </tr>\n        </tbody>\n        <pagination-controls (pageChange)=\"p2 = $event\" id=\"second\"></pagination-controls>\n\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/persons/workpositionsperson-list/workpositionsperson-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkpositionspersonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workposition_service__ = __webpack_require__("./src/app/services/workposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

//toastr

var WorkpositionspersonListComponent = /** @class */ (function () {
    function WorkpositionspersonListComponent(workpositionService, personService, toastr) {
        this.workpositionService = workpositionService;
        this.personService = personService;
        this.toastr = toastr;
        this.p2 = 1;
    }
    WorkpositionspersonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workpositionService.getWorkposition()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.workpositionsList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.workpositionsList.push(x);
            });
        });
    };
    WorkpositionspersonListComponent.prototype.onEdit = function (cargo) {
        this.personService.selectedPerson.cargo = cargo;
    };
    WorkpositionspersonListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workpositionsperson-list',
            template: __webpack_require__("./src/app/components/persons/workpositionsperson-list/workpositionsperson-list.component.html"),
            styles: [__webpack_require__("./src/app/components/persons/workpositionsperson-list/workpositionsperson-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_workposition_service__["a" /* WorkpositionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], WorkpositionspersonListComponent);
    return WorkpositionspersonListComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <app-testcargos></app-testcargos>\n    </div>\n    \n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n      <app-testkpi></app-testkpi>\n    </div>\n   \n    <div class=\"col-md-6 text-center\">\n      <app-testperson></app-testperson>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <app-testform></app-testform>\n    </div>\n    <div class=\"col-md-12 text-center\">\n      <app-testlist></app-testlist>\n    </div>\n    \n   \n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__("./src/app/components/test/test.component.html"),
            styles: [__webpack_require__("./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/components/test/testcargos/testcargos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/testcargos/testcargos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> LISTA DE CARGOS</h6>\n    \n    <nav class=\"navbar\">\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n      </nav>\n    <table class=\"table table-sm table-hover table-light\">\n      <tbody>\n            <thead>\n                <tr>\n                </tr>\n              </thead>\n          <tr *ngFor =\"let workposition of workpositionsList |filter:filter |paginate: { itemsPerPage: 5, currentPage: p21, id: 'veinteuno' }; let i = index\">\n          <td>{{workposition.name}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(workposition.name)\">\n              <i class=\"far fa-edit\"></i>\n            \n            </a>\n            \n          </td>\n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p21 = $event\" id=\"veinteuno\"></pagination-controls>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/test/testcargos/testcargos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestcargosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workposition_service__ = __webpack_require__("./src/app/services/workposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_test_service__ = __webpack_require__("./src/app/services/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

//toastr

var TestcargosComponent = /** @class */ (function () {
    function TestcargosComponent(workpositionService, testService, toastr) {
        this.workpositionService = workpositionService;
        this.testService = testService;
        this.toastr = toastr;
        this.p21 = 1;
    }
    TestcargosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workpositionService.getWorkposition()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.workpositionsList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.workpositionsList.push(x);
            });
        });
    };
    TestcargosComponent.prototype.onEdit = function (cargo) {
        this.testService.selectedTest.cargo = cargo;
    };
    TestcargosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testcargos',
            template: __webpack_require__("./src/app/components/test/testcargos/testcargos.component.html"),
            styles: [__webpack_require__("./src/app/components/test/testcargos/testcargos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_workposition_service__["a" /* WorkpositionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_test_service__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], TestcargosComponent);
    return TestcargosComponent;
}());



/***/ }),

/***/ "./src/app/components/test/testform/testform.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/testform/testform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5 bg-light\">\n  <div class=\"card-body\">\n    <form #testForm=\"ngForm\" (ngSubmit)=\"onSubmit(testForm)\">\n     <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"testService.selectedTest.$key\">\n      \n\n      \n\n      <div class=\"form-group\">\n        <input \n      readonly\n          type=\"text\"\n          class=\"form-control\" \n          name=\"cargo\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"testService.selectedTest.cargo\"\n          placeholder=\"Selecciona el cargo de la lista\"\n        >\n      </div>\n\n    \n      <div class=\"form-group\">\n        <input \n        readonly\n          type=\"text\"\n          class=\"form-control\" \n          name=\"nombre\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"testService.selectedTest.nombre\"\n          placeholder=\"Selecciona una persona de la lista\"\n        >\n      </div>\n      <input type=\"hidden\" name=\"cedula\" #$key=\"ngModel\" [(ngModel)]=\"testService.selectedTest.cedula\">\n  \n <h6>Ingreso del valor Objetivo</h6>\n      <div class=\"form-group\">\n        <input \n        readonly\n          type=\"text\"\n          class=\"form-control\" \n          name=\"objetivo\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"testService.selectedTest.objetivo\"\n          placeholder=\"Selecciona un indicador de la lista\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <input \n       \n          type=\"text\"\n          class=\"form-control\" \n          name=\"objetivoVal\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"testService.selectedTest.objetivoVal\"\n          placeholder=\"Ingresa el valor objetivo\"\n        >\n      </div>\n\n      <h6>Ingreso del valor cumplido</h6>\n      <div class=\"form-group\">\n        <input \n        readonly\n          type=\"text\"\n          class=\"form-control\" \n          name=\"cumplimiento\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"testService.selectedTest.cumplimiento\"\n          placeholder=\"Selecciona un indicador de la lista\"\n        >\n      </div>\n\n      <div class=\"form-group\">\n        <input \n        \n          type=\"text\"\n          class=\"form-control\" \n          name=\"cumplimientoVal\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"testService.selectedTest.cumplimientoVal\"\n          placeholder=\"Ingresa el valor cumplido\"\n        >\n      </div>\n      <input type=\"hidden\" name=\"calculo\" #$key=\"ngModel\" [(ngModel)]=\"testService.selectedTest.calculo\">\n   \n      \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">\n          <i class=\"fas fa-plus-circle\"></i> Agregar Evaluación \n        </button>\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(testForm)\">\n          <i class=\"fas fa-sync-alt\"></i> Limpiar\n        </button>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/test/testform/testform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service__ = __webpack_require__("./src/app/services/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_test__ = __webpack_require__("./src/app/models/test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Service


//Person class

var TestformComponent = /** @class */ (function () {
    function TestformComponent(testService, toastr) {
        this.testService = testService;
        this.toastr = toastr;
    }
    TestformComponent.prototype.ngOnInit = function () {
        this.testService.getTest();
        this.resetForm();
    };
    TestformComponent.prototype.resetForm = function (personForm) {
        if (personForm != null)
            personForm.reset();
        this.testService.selectedTest = new __WEBPACK_IMPORTED_MODULE_3__models_test__["a" /* Test */]();
    };
    TestformComponent.prototype.onSubmit = function (testForm) {
        if (testForm.value.calculo == "D") {
            testForm.value.porcentaje = Math.round((testForm.value.objetivoVal / testForm.value.cumplimientoVal) * 100);
        }
        else {
            testForm.value.porcentaje = (testForm.value.cumplimientoVal / testForm.value.objetivoVal) * 100;
        }
        if (testForm.value.porcentaje > 75) {
            testForm.value.color = "1";
        }
        if (testForm.value.porcentaje < 75) {
            if (testForm.value.porcentaje > 40) {
                testForm.value.color = "2";
            }
        }
        if (testForm.value.porcentaje <= 40) {
            if (testForm.value.porcentaje >= 0) {
                testForm.value.color = "3";
            }
        }
        this.testService.insertTest(testForm.value);
        this.toastr.success('Operación Existosa', 'Nueva evaluacion Agregado');
        this.resetForm(testForm);
    };
    TestformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testform',
            template: __webpack_require__("./src/app/components/test/testform/testform.component.html"),
            styles: [__webpack_require__("./src/app/components/test/testform/testform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], TestformComponent);
    return TestformComponent;
}());



/***/ }),

/***/ "./src/app/components/test/testkpi/testkpi.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/testkpi/testkpi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> Lista de Kpis</h6>\n\n    <nav class=\"navbar\">\n      <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">    \n      <!--testService.selectedTest.cargo\n      -->  \n    </nav>\n    <table class=\"table table-sm table-hover\">\n      <thead class=\"thead-light\">\n        <tr>\n        \n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor =\"let kpi of kpiList |filter:filter |paginate: { itemsPerPage: 6, currentPage: p22, id: 'vdos' }; let i = index\">\n \n          <td>{{kpi.indicador}}</td>\n          \n          <td>{{kpi.cargo}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(kpi)\">\n              <i class=\"far fa-edit\"></i>      \n            </a>            \n          </td>\n        </tr>\n      </tbody>\n      \n    </table>\n    <pagination-controls (pageChange)=\"p22 =$event\" id=\"vdos\"></pagination-controls>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/test/testkpi/testkpi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestkpiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_kpi_service__ = __webpack_require__("./src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_test_service__ = __webpack_require__("./src/app/services/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service


//toastr

var TestkpiComponent = /** @class */ (function () {
    function TestkpiComponent(kpiService, testService, toastr) {
        this.kpiService = kpiService;
        this.testService = testService;
        this.toastr = toastr;
        this.p22 = 1;
    }
    TestkpiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kpiService.getKpis()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.kpiList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.kpiList.push(x);
            });
        });
    };
    TestkpiComponent.prototype.onEdit = function (kpi) {
        this.testService.selectedTest.cumplimiento = kpi.cumplimiento;
        this.testService.selectedTest.objetivo = kpi.objetivo;
        this.testService.selectedTest.calculo = kpi.calculo;
    };
    TestkpiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testkpi',
            template: __webpack_require__("./src/app/components/test/testkpi/testkpi.component.html"),
            styles: [__webpack_require__("./src/app/components/test/testkpi/testkpi.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_kpi_service__["a" /* KpiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_test_service__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], TestkpiComponent);
    return TestkpiComponent;
}());



/***/ }),

/***/ "./src/app/components/test/testlist/testlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/testlist/testlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> Lista de Evaluaciones</h6>\n\n    \n    <table class=\"table table-sm table-hover\">\n      \n      <tbody *ngFor =\"let test of testList\">\n        \n        \n        <tr class=\"bg-success\" *ngIf=\"test.color == 1\">\n          \n          <td>{{test.cargo}}</td>\n          <td>{{test.nombre}}</td> \n          <td>{{test.objetivo}}</td>\n          <td>{{test.porcentaje}}%</td>\n         \n        </tr>\n        <tr class=\"bg-warning\" *ngIf=\"test.color == 2\">\n          \n            <td>{{test.cargo}}</td>\n            <td>{{test.nombre}}</td> \n            <td>{{test.objetivo}}</td>\n            <td>{{test.porcentaje}}%</td>\n           \n          </tr>\n\n          <tr class=\"bg-danger\" *ngIf=\"test.color == 3\">\n          \n              <td>{{test.cargo}}</td>\n              <td>{{test.nombre}}</td> \n              <td>{{test.objetivo}}</td>\n              <td>{{test.porcentaje}}%</td>\n             \n            </tr>\n       \n\n\n\n      \n    \n      \n    \n          <!--\n            <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(kpi)\">\n              <i class=\"far fa-edit\"></i>\n      \n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(kpi.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n                       </a>\n          </td> -->\n\n        \n      </tbody>\n      \n    </table>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/test/testlist/testlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service__ = __webpack_require__("./src/app/services/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

var TestlistComponent = /** @class */ (function () {
    function TestlistComponent(testService, toastr) {
        this.testService = testService;
        this.toastr = toastr;
    }
    TestlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testService.getTest()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.testList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.testList.push(x);
            });
        });
    };
    TestlistComponent.prototype.onEdit = function (test) {
        this.testService.selectedTest = Object.assign({}, test);
    };
    TestlistComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar a este Eva permanentemente?')) {
            this.testService.deletetest($key);
            this.toastr.success('Operacion Completada', 'Eva Eliminado');
        }
    };
    TestlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testlist',
            template: __webpack_require__("./src/app/components/test/testlist/testlist.component.html"),
            styles: [__webpack_require__("./src/app/components/test/testlist/testlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_test_service__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], TestlistComponent);
    return TestlistComponent;
}());



/***/ }),

/***/ "./src/app/components/test/testperson/testperson.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/testperson/testperson.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"text-center\"> Lista de Personas</h6>\n    <nav class=\"navbar\">\n        <input  readonly class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"testService.selectedTest.cargo\">  \n        \n        \n      </nav>\n    <table class=\"table table-sm table-hover\">\n      \n      <tbody>\n          <tr *ngFor =\"let person of personList| filter:testService.selectedTest.cargo |  paginate: { itemsPerPage: 5, currentPage: p23, id: 'vtres' }; let i = index\">\n          <td>{{person.name}}</td>\n          <td>{{person.cargo}}</td> \n          <td>{{person.cedula}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(person)\">\n              <i class=\"far fa-edit\"></i>\n            \n            </a>\n            \n          </td>\n          \n\n        </tr>\n      </tbody>\n      \n      \n    \n    </table>\n    <pagination-controls (pageChange)=\"p23 = $event\" id=\"vtres\"></pagination-controls>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/test/testperson/testperson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestpersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_test_service__ = __webpack_require__("./src/app/services/test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_evaluadores_service__ = __webpack_require__("./src/app/services/evaluadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service



//toastr

var TestpersonComponent = /** @class */ (function () {
    function TestpersonComponent(personService, testService, evaluadoresService, toastr) {
        this.personService = personService;
        this.testService = testService;
        this.evaluadoresService = evaluadoresService;
        this.toastr = toastr;
        this.p23 = 1;
    }
    TestpersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService.getPersons()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.personList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.personList.push(x);
            });
        });
    };
    TestpersonComponent.prototype.onEdit = function (person) {
        this.testService.selectedTest.nombre = person.name;
        this.testService.selectedTest.cedula = person.cedula;
    };
    TestpersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testperson',
            template: __webpack_require__("./src/app/components/test/testperson/testperson.component.html"),
            styles: [__webpack_require__("./src/app/components/test/testperson/testperson.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_2__services_test_service__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_3__services_evaluadores_service__["a" /* EvaluadoresService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], TestpersonComponent);
    return TestpersonComponent;
}());



/***/ }),

/***/ "./src/app/components/workpositions/workposition/workposition.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/workpositions/workposition/workposition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-5 mb-5 bg-light\">\n  <div class=\"card-body\">\n    <form #workpositionForm=\"ngForm\" (ngSubmit)=\"onSubmit(workpositionForm)\">\n      <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"workpositionService.selectedWorkposition.$key\">\n\n      <div class=\"form-group\">\n        <input \n          type=\"text\"\n          class=\"form-control\" \n          name=\"name\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"workpositionService.selectedWorkposition.name\"\n          placeholder=\"Agrega el nombre del cargo\"\n        >\n      </div>\n      \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" type=\"submit\">\n          <i class=\"fas fa-plus-circle\"></i> Agregar Cargo\n        </button>\n        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(workpositionForm)\">\n          <i class=\"fas fa-sync-alt\"></i> Limpiar\n        </button>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/workpositions/workposition/workposition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkpositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workposition_service__ = __webpack_require__("./src/app/services/workposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_workposition__ = __webpack_require__("./src/app/models/workposition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Service


//Person class

var WorkpositionComponent = /** @class */ (function () {
    function WorkpositionComponent(workpositionService, toastr) {
        this.workpositionService = workpositionService;
        this.toastr = toastr;
    }
    WorkpositionComponent.prototype.ngOnInit = function () {
        this.workpositionService.getWorkposition();
        this.resetForm();
    };
    WorkpositionComponent.prototype.onSubmit = function (workpositionForm) {
        if (workpositionForm.value.$key == null) {
            this.workpositionService.insertWorkposition(workpositionForm.value);
            this.toastr.success('Operación Existosa', 'Nuevo cargo Agregada');
        }
        else {
            this.workpositionService.updateWorkposition(workpositionForm.value);
            this.toastr.success('Operación Existosa', 'Cargo ha sido Editada');
        }
        this.resetForm(workpositionForm);
    };
    WorkpositionComponent.prototype.resetForm = function (personForm) {
        if (personForm != null)
            personForm.reset();
        this.workpositionService.selectedWorkposition = new __WEBPACK_IMPORTED_MODULE_3__models_workposition__["a" /* Workposition */]();
    };
    WorkpositionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workposition',
            template: __webpack_require__("./src/app/components/workpositions/workposition/workposition.component.html"),
            styles: [__webpack_require__("./src/app/components/workpositions/workposition/workposition.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_workposition_service__["a" /* WorkpositionService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], WorkpositionComponent);
    return WorkpositionComponent;
}());



/***/ }),

/***/ "./src/app/components/workpositions/workpositions-list/workpositions-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/workpositions/workpositions-list/workpositions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3 mb-5\">\n  <div class=\"card-body\">\n    <h6 class=\"test-center\"> LISTA DE CARGOS</h6>\n    \n    <nav class=\"navbar\">\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n      </nav>\n    <table class=\"table table-sm table-hover table-light\">\n      \n      <tbody>\n          \n\n            <thead>\n                <tr>\n                  \n                  \n                </tr>\n              </thead>\n          <tr *ngFor =\"let workposition of workpositionsList |filter:filter |paginate: { itemsPerPage: 5, currentPage: p1, id: 'first' }; let i = index\">\n          <td>{{workposition.name}}</td>\n          <td>\n            <a class=\"btn btn-secondary text-white\" (click)=\"onEdit(workposition)\">\n              <i class=\"far fa-edit\"></i>\n            \n            </a>\n            <a class=\"btn btn-danger text-white\" (click)=\"onDelete(workposition.$key)\" >\n              <i class=\"fas fa-trash-alt\"></i>\n          \n            </a>\n          </td>\n\n        </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p1 = $event\" id=\"first\"></pagination-controls>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/workpositions/workpositions-list/workpositions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkpositionsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workposition_service__ = __webpack_require__("./src/app/services/workposition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//service

//toastr

var WorkpositionsListComponent = /** @class */ (function () {
    function WorkpositionsListComponent(workpositionService, toastr) {
        this.workpositionService = workpositionService;
        this.toastr = toastr;
        this.p = 1;
    }
    WorkpositionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workpositionService.getWorkposition()
            .snapshotChanges()
            .subscribe(function (item) {
            _this, _this.workpositionsList = [];
            item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$key"] = element.key;
                _this.workpositionsList.push(x);
            });
        });
    };
    WorkpositionsListComponent.prototype.onEdit = function (workposition) {
        this.workpositionService.selectedWorkposition = Object.assign({}, workposition);
    };
    WorkpositionsListComponent.prototype.onDelete = function ($key) {
        if (confirm('Seguro que desea eliminar el cargo permanentemente?')) {
            this.workpositionService.deleteWorkposition($key);
            this.toastr.success('Operacion Completada', 'Cargo Eliminado');
        }
    };
    WorkpositionsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workpositions-list',
            template: __webpack_require__("./src/app/components/workpositions/workpositions-list/workpositions-list.component.html"),
            styles: [__webpack_require__("./src/app/components/workpositions/workpositions-list/workpositions-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_workposition_service__["a" /* WorkpositionService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], WorkpositionsListComponent);
    return WorkpositionsListComponent;
}());



/***/ }),

/***/ "./src/app/components/workpositions/workpositions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/workpositions/workpositions.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n      \n    <div class=\"col-md-4\">\n      <app-workposition></app-workposition>\n    </div>\n    \n    <div class=\"col-md-7 text-center\">\n      <app-workpositions-list></app-workpositions-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/workpositions/workpositions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkpositionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkpositionsComponent = /** @class */ (function () {
    function WorkpositionsComponent() {
    }
    WorkpositionsComponent.prototype.ngOnInit = function () {
    };
    WorkpositionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workpositions',
            template: __webpack_require__("./src/app/components/workpositions/workpositions.component.html"),
            styles: [__webpack_require__("./src/app/components/workpositions/workpositions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkpositionsComponent);
    return WorkpositionsComponent;
}());



/***/ }),

/***/ "./src/app/models/competency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Competency; });
var Competency = /** @class */ (function () {
    function Competency() {
    }
    return Competency;
}());



/***/ }),

/***/ "./src/app/models/kpi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kpi; });
var Kpi = /** @class */ (function () {
    function Kpi() {
    }
    return Kpi;
}());



/***/ }),

/***/ "./src/app/models/matriz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matriz; });
var Matriz = /** @class */ (function () {
    function Matriz() {
    }
    return Matriz;
}());



/***/ }),

/***/ "./src/app/models/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/models/test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test; });
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());



/***/ }),

/***/ "./src/app/models/workposition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workposition; });
var Workposition = /** @class */ (function () {
    function Workposition() {
    }
    return Workposition;
}());



/***/ }),

/***/ "./src/app/services/competency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_competency__ = __webpack_require__("./src/app/models/competency.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//clase Workposition

var CompetencyService = /** @class */ (function () {
    function CompetencyService(firebase) {
        this.firebase = firebase;
        this.selectedCompetency = new __WEBPACK_IMPORTED_MODULE_2__models_competency__["a" /* Competency */]();
    }
    CompetencyService.prototype.getCompetency = function () {
        return this.competenciesList = this.firebase.list('competencies');
    };
    CompetencyService.prototype.insertCompetency = function (competency) {
        this.competenciesList.push({
            name: competency.name,
        });
    };
    CompetencyService.prototype.updateCompetency = function (competency) {
        this.competenciesList.update(competency.$key, {
            name: competency.name
        });
    };
    CompetencyService.prototype.deleteCompetency = function ($key) {
        this.competenciesList.remove($key);
    };
    CompetencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CompetencyService);
    return CompetencyService;
}());



/***/ }),

/***/ "./src/app/services/evaluadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_person__ = __webpack_require__("./src/app/models/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//clase Person

var EvaluadoresService = /** @class */ (function () {
    function EvaluadoresService(firebase) {
        this.firebase = firebase;
        this.selectedPersonEvaluador = new __WEBPACK_IMPORTED_MODULE_2__models_person__["a" /* Person */]();
    }
    EvaluadoresService.prototype.getPersons = function () {
        return this.personList = this.firebase.list('evaluadores');
    };
    EvaluadoresService.prototype.insertPerson = function (person) {
        this.personList.push({
            name: person.name,
            cedula: person.cedula,
            cargo: person.cargo,
        });
    };
    EvaluadoresService.prototype.deletePerson = function ($key) {
        this.personList.remove($key);
    };
    EvaluadoresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EvaluadoresService);
    return EvaluadoresService;
}());



/***/ }),

/***/ "./src/app/services/kpi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_kpi__ = __webpack_require__("./src/app/models/kpi.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//clase Person

var KpiService = /** @class */ (function () {
    function KpiService(firebase) {
        this.firebase = firebase;
        this.selectedKpi = new __WEBPACK_IMPORTED_MODULE_2__models_kpi__["a" /* Kpi */]();
    }
    KpiService.prototype.getKpis = function () {
        return this.kpiList = this.firebase.list('kpis');
    };
    KpiService.prototype.insertKpi = function (kpi) {
        this.kpiList.push({
            cargo: kpi.cargo,
            indicadorMacro: kpi.indicadorMacro,
            indicadorProceso: kpi.indicadorProceso,
            indicador: kpi.indicador,
            objetivo: kpi.objetivo,
            cumplimiento: kpi.cumplimiento,
            calculo: kpi.calculo
        });
    };
    KpiService.prototype.updateKpi = function (kpi) {
        this.kpiList.update(kpi.$key, {
            cargo: kpi.cargo,
            indicadorMacro: kpi.indicadorMacro,
            indicadorProceso: kpi.indicadorProceso,
            indicador: kpi.indicador,
            objetivo: kpi.objetivo,
            cumplimiento: kpi.cumplimiento,
            calculo: kpi.calculo
        });
    };
    KpiService.prototype.deleteKpi = function ($key) {
        this.kpiList.remove($key);
    };
    KpiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], KpiService);
    return KpiService;
}());



/***/ }),

/***/ "./src/app/services/matriz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrizService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_matriz__ = __webpack_require__("./src/app/models/matriz.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase


var MatrizService = /** @class */ (function () {
    function MatrizService(firebase) {
        this.firebase = firebase;
        this.selectedMatriz = new __WEBPACK_IMPORTED_MODULE_2__models_matriz__["a" /* Matriz */]();
    }
    MatrizService.prototype.getMatriz = function () {
        return this.matrizList = this.firebase.list('matriz');
    };
    MatrizService.prototype.insertMatriz = function (matriz) {
        this.matrizList.push({
            evaluador: matriz.evaluador,
            evaluado: matriz.evaluado
        });
    };
    MatrizService.prototype.updateMatriz = function (matriz) {
        this.matrizList.update(matriz.$key, {
            evaluador: matriz.evaluador,
            evaluado: matriz.evaluado
        });
    };
    MatrizService.prototype.deleteMatriz = function ($key) {
        this.matrizList.remove($key);
    };
    MatrizService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MatrizService);
    return MatrizService;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_person__ = __webpack_require__("./src/app/models/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//clase Person

var PersonService = /** @class */ (function () {
    function PersonService(firebase) {
        this.firebase = firebase;
        this.selectedPerson = new __WEBPACK_IMPORTED_MODULE_2__models_person__["a" /* Person */]();
    }
    PersonService.prototype.getPersons = function () {
        return this.personList = this.firebase.list('persons');
    };
    PersonService.prototype.insertPerson = function (person) {
        this.personList.push({
            name: person.name,
            cedula: person.cedula,
            area: person.area,
            estructuraorganizacional: person.estructuraorganizacional,
            estructurafisicacostos: person.estructurafisicacostos,
            cargo: person.cargo,
            ciudad: person.ciudad,
        });
    };
    PersonService.prototype.updatePerson = function (person) {
        this.personList.update(person.$key, {
            name: person.name,
            cedula: person.cedula,
            area: person.area,
            estructuraorganizacional: person.estructuraorganizacional,
            estructurafisicacostos: person.estructurafisicacostos,
            cargo: person.cargo,
            ciudad: person.ciudad,
        });
    };
    PersonService.prototype.deletePerson = function ($key) {
        this.personList.remove($key);
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/services/test.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_test__ = __webpack_require__("./src/app/models/test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//clase test

var TestService = /** @class */ (function () {
    function TestService(firebase) {
        this.firebase = firebase;
        this.selectedTest = new __WEBPACK_IMPORTED_MODULE_2__models_test__["a" /* Test */]();
    }
    TestService.prototype.getTest = function () {
        return this.testList = this.firebase.list('tests');
    };
    TestService.prototype.insertTest = function (test) {
        this.testList.push({
            cargo: test.cargo,
            objetivo: test.objetivo,
            cumplimiento: test.cumplimiento,
            calculo: test.calculo,
            porcentaje: test.porcentaje,
            objetivoVal: test.objetivoVal,
            cumplimientoVal: test.cumplimientoVal,
            cedula: test.cedula,
            nombre: test.nombre,
            color: test.color
        });
    };
    TestService.prototype.updateTest = function (test) {
        this.testList.update(test.$key, {
            cargo: test.cargo,
            objetivo: test.objetivo,
            cumplimiento: test.cumplimiento,
            calculo: test.calculo,
            porcentaje: test.porcentaje,
            objetivoVal: test.objetivoVal,
            cumplimientoVal: test.cumplimientoVal,
            cedula: test.cedula,
            nombre: test.nombre,
            color: test.color
        });
    };
    TestService.prototype.deletetest = function ($key) {
        this.testList.remove($key);
    };
    TestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/workposition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkpositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_workposition__ = __webpack_require__("./src/app/models/workposition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Firebase

//clase Workposition

var WorkpositionService = /** @class */ (function () {
    function WorkpositionService(firebase) {
        this.firebase = firebase;
        this.selectedWorkposition = new __WEBPACK_IMPORTED_MODULE_2__models_workposition__["a" /* Workposition */]();
    }
    WorkpositionService.prototype.getWorkposition = function () {
        return this.workpositionsList = this.firebase.list('workpositions');
    };
    WorkpositionService.prototype.insertWorkposition = function (workposition) {
        this.workpositionsList.push({
            name: workposition.name,
        });
    };
    WorkpositionService.prototype.updateWorkposition = function (workposition) {
        this.workpositionsList.update(workposition.$key, {
            name: workposition.name
        });
    };
    WorkpositionService.prototype.deleteWorkposition = function ($key) {
        this.workpositionsList.remove($key);
    };
    WorkpositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], WorkpositionService);
    return WorkpositionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //configuracion extraida de firebase
    firebase: {
        apiKey: "AIzaSyBNpNZWs2OeN3jeZ5bubWLgHuzWOlm5tW8",
        authDomain: "angular-kpi-firebase-v1.firebaseapp.com",
        databaseURL: "https://angular-kpi-firebase-v1.firebaseio.com",
        projectId: "angular-kpi-firebase-v1",
        storageBucket: "angular-kpi-firebase-v1.appspot.com",
        messagingSenderId: "568031062931"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map