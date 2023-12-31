import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: 'registrar.page.html',
  styleUrls: ['registrar.page.scss'],
})
export class RegistrarPage {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  usuario: string = '';
  password: string = '';

  constructor(private navCtrl: NavController,
    private alertController: AlertController) {}

  async crearCuenta() {
    // Validación de campos aquí si es necesario

    // Obtener los datos de usuarios existentes del localStorage (si los hay)
    const usuariosExistenteString = localStorage.getItem('usuarios');
    const usuariosExistente = usuariosExistenteString ? JSON.parse(usuariosExistenteString) : [];

    // Crear un objeto con los datos del nuevo usuario
    const nuevoUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      rut: this.rut,
      usuario: this.usuario,
      password: this.password,
    };

    // Agregar el nuevo usuario al arreglo de usuarios existentes
    usuariosExistente.push(nuevoUsuario);

    // Almacenar el arreglo de usuarios en el localStorage como cadena JSON
    localStorage.setItem('usuarios', JSON.stringify(usuariosExistente));

    // Mostrar todos los datos de usuarios en la consola
    console.log('Todos los datos de usuarios registrados:', usuariosExistente);

    // Limpiar los campos
    this.limpiarCampos();

    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'La cuenta ha sido creada exitosamente',
      buttons: ['Aceptar']
    });

    await alert.present();

  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.rut = '';
    this.usuario = '';
    this.password = '';
  }

  atrasInicio() {
    this.navCtrl.navigateRoot(['/tabs/tab1']); 
      }
}
