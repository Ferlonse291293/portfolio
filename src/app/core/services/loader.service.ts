import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()

export class LoaderService {
    isLoading = new Subject<boolean>();

    show() {
        this.isLoading.next(true);
    }

    hide() {
        this.isLoading.next(false);
    }


}
