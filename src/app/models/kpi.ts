import { AngularFireList } from "angularfire2/database";

export class Kpi {
    //kpi
    $key: string;
    nombre: string;
    objetivo: number;
    cumplimiento: number;
    porcentaje: number;

    //cargo
    cargo: string;

    //competencia
    competencias: Array<any>;
    
}
