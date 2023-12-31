import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  resultadoEscaneo : string | null = null;



  constructor( 
    private navCtrl: NavController,
    private router: Router,
    private activatedrouter: ActivatedRoute
    ) { 
      this.activatedrouter.paramMap.subscribe((params) =>{
        this.resultadoEscaneo = params.get('resultadoEscaneo');
      });
      }



  ngOnInit() {
  }


  //Metodos de navegacion
  back(){
    this.router.navigate(['/sesion'])
  }

  cerrarSesion(){
    this.navCtrl.navigateForward('/tabs/tab1')
  }

}