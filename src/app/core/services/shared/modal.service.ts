import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models';
import {distinctUntilChanged} from 'rxjs/operators';


@Injectable()

export class ModalService {

  private registerModalSubject = new BehaviorSubject<boolean>(false);
  public registerModal = this.registerModalSubject.asObservable().pipe(distinctUntilChanged());

  changeValueRegister(value: boolean){
    this.registerModalSubject.next(value);
  }

}
