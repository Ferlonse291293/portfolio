import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtService} from './jwt.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';


@Injectable()
export class FCMService {
    public token: string;
    constructor(
        private http: HttpClient,
        private jwtService: JwtService,
        private fcm: FCM
    ) {
    }

    load_FCM() {

        this.fcm.getToken().then(token => {
            console.log(token);
        });
// receiving notification
        this.fcm.onNotification().subscribe((data) => {
            if (data.wasTapped) {
                alert(data);
            }   else {
                alert(data);
            }

        });
// updaiting fcm
        /*
        this.fcm.onTokenRefresh().subscribe((token) => {
            this.jwtService.setTokenFCM(token);
        });
    */
    }
/*
    async presentModal(type: string) {
        const modal = await this.modalController.create({
            component: ModalPlaceComponent,
            cssClass: 'my-custom-class',
            animated: true,
            componentProps: {
                'typePlace': type,
            }

        });
        await modal.present();
        const { data } = await modal.onWillDismiss();
        if (data.city){
            this.form.value.city = data.city;
            this.textCity = data.city;
        }else{
            this.form.value.country = data.country;
            this.textCountry = data.country;
        }
    }
*/

}
