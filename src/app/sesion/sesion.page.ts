import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BarcodeScanner} from 'capacitor-barcode-scanner'


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
  isSupported = true;
 

  constructor(private alertController: AlertController,
    private  navCtrl: NavController) { }

  ngOnInit() {
    
  }


  async anto(){

    const result = await(await BarcodeScanner.scan()).code;
    if (result) {
      console.log('Qr',JSON.parse(result));
    }
    

  }

 

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  CerrarSesion() {
    this.navCtrl.navigateRoot(['/tabs/tab1']); 
      }
}
