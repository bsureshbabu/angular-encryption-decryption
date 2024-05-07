import { Injectable } from '@angular/core';

import * as CryptoJS from "crypto-js";
// const crypto = require('crypto');


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  key = 'C86ySHUoUnAHAFm0Rz1bJqUJJV89ReJA'

  //  //To encrypt input data
  public encrypt(text: any): string {
    var text = text;
    typeof text !== 'string' && (text = JSON.stringify(text));
    console.log('JSON stringFy', JSON.stringify(text))
    console.log('JSON stringFy', text)
    var encryptData = CryptoJS.AES.encrypt(text, this.key).toString();
    encryptData = encryptData.toString();
    console.log('encryptData',encryptData);
    return encryptData
  }

  //To decrypt input data
  public decrypt(passwordToDecrypt: string) {
    return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}
