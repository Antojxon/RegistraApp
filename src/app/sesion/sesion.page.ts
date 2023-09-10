import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BarcodeScanner, ScanResult} from 'capacitor-barcode-scanner'


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

    try {
      const result = await BarcodeScanner.scan();
      if (result && result.code !== null && typeof result.code === 'string') {
        const qrData = JSON.parse(result.code);
  
        const alert = await this.alertController.create({
          header: 'Información del QR',
          message: JSON.stringify(qrData), 
          buttons: ['OK'],
        });
  
        await alert.present();
      } else {
        console.error('El escaneo no contiene contenido válido.');
      }
    } catch (error) {
      console.error('Error al escanear el código QR:', error);
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
