import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { AuthModel } from './auth.model';

import { LoadingController } from '@ionic/angular';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
 //datas: [];
 public username :string;
 public emails :string;
    user_name: string;
    phone_no: string;
    email: string;
    level: string;       
    license_key: string;
    system_id: string;
    remarks: string;
  
 isLoading = false;
 loginFailed = false;
  result: string
  
  constructor(private httpService: HttpServiceService, private router: Router,
     public navCont: NavController,
     private loadingCtrl: LoadingController,
      private menuCon: MenuController, private http: HttpClient,
      private authServices: AuthService, private alert: AlertController) { 
    this.menuCon.enable(false, 'main-menu');
  }
     //menuCon.enable(false, 'main-menu');
  ngOnInit() {
    pdfjsLib.GlobalWorkerOptions.workersSrc = '../../assets/pdf.worker.min.js';
  }

  async presentAlert(){
    let alerts = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Activation Failed !',
      message: 'Supply correct activation code and try again',
      buttons: ['OK']
     
    });
    await alerts.present();
  }
  onSubmit(form: NgForm){
   
    //console.log(form);
 
    if(!form.valid){
      this.isLoading = true;
      return;
    }else{

      this.user_name = form.value.user_name;
      this.phone_no = form.value.phone_no;
      this.email = form.value.email;
      this.level = 'Basic school';       
      this.license_key = form.value.license_key;
      this.system_id = 'ADEFFBGTHR45';
      this.remarks = 'Kids Tab PlayBook';
      
      //const datas = "{user_name:"+this.user_name+",phone_no:"+this.phone_no+",email:"+this.email+",level:"+this.level+",license_key:"+this.license_key+",system_id:"+this.system_id+",remarks:"+ this.remarks+"}";
      const datas ='{"user_name":"'+this.user_name+'",'
      +'"phone_no" :"'+this.phone_no+'",'
      +'"email": "'+this.email+'",'
      +'"level": "'+this.level+'",'
      +'"license_key":"'+this.license_key+'",'
      +'"system_id":"'+this.system_id+'",'
      +'"remarks":"'+this.remarks+'"'
      +'}';
     
      const datasR = JSON.stringify(datas);
      
      this.isLoading = false;
      this.loadingCtrl.create({ keyboardClose: true, message: 'Loading in...'}).then(loadingEl => {
      loadingEl.present();
    
        setTimeout(() => {
          //this.isLoading = false;
          loadingEl.dismiss();
    
       this.authServices.activate(datas).subscribe(() => {
        if (this.authServices.isActive == true) {
         // console.log('Activation SuccessFull');
          localStorage.setItem('currentUserName', this.user_name);
          localStorage.setItem('currentEmail', this.email);


          this.username = localStorage.getItem('currentUserName');

          this.emails = localStorage.getItem('currentEmail');

          this.menuCon.enable(true, 'main-menu');
     
          this.router.navigateByUrl('/home');

        }else{
          this.loginFailed= true;
           this.presentAlert();
         
        }
           });
         // this.router.navigateByUrl('/home');
        }, 1500);
        });
      
      }
     
      
   
 
  }

}
