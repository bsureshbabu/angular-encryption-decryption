import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';
// import * as crypto from 'crypto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // key = crypto.randomBytes(32);
  private _text = '400';
  encrypt = '';
  decripted = 'U2FsdU2FsdGVkX1+ycuuzs9XYD0zdJod9yzVipjp05MRbsIc=';


  password = "secret password";
  //Constructor
  constructor(private encrDecrService: CryptoService) { }
  
  ngOnInit(): void {
    this.encrypt = this.encrDecrService.encrypt(this._text);    
    console.log('Decrypted  data :', this.encrypt);

    this.decripted = this.encrDecrService.decrypt(this.encrypt);
    console.log('Encripted to Decrypted  data :', this.decripted);

  }

 

}
