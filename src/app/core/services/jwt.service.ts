import { Injectable } from '@angular/core';




@Injectable()
export class JwtService {

  storage: any = window.localStorage;

  readonly KEY: string = 'user-token';
  readonly KEYLifetime: string = 'user-token-exp';
  readonly FB: string = 'token-fb';
  readonly KEYFBLifetime: string = 'user-FbToken-exp';
  readonly LastOrder: string = 'order';

  constructor(
  ){}


  get token(): string {
    const expDate = new Date(this.storage.getItem(this.KEYLifetime));
    if (new Date() > expDate) {
      this.destroyToken();
      return null;
    }
    return this.storage.getItem(this.KEY);
  }
   setToken(response: any | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 2592000000);
      this.storage.setItem(this.KEY, response);
      this.storage.setItem(this.KEYLifetime, expDate.toString());
    } else {
      this.storage.clear();
    }
  }

  get tokenFb(): string {
    return this.storage.getItem(this.FB);
  }
  setTokenFb(response: any, lifetime: string) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 15000 + Number(lifetime));
      this.storage.setItem(this.FB, response);
      this.storage.setItem(this.KEYFBLifetime, expDate.toString());
    } else {
      this.storage.clear();
    }
  }

  destroyToken() {
    this.setToken(null);
  }


 async setOrder(orderId: number): Promise<any> {
   await this.storage.setItem(this.LastOrder, orderId);
  }

  getOrder(): number {
   return this.storage.getItem(this.LastOrder);
  }
  async removeOrder(): Promise<any> {
  await  this.storage.removeItem(this.LastOrder);
  }





/*
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
*/
}
