import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ModalService} from '../../../../core/services/shared';





@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hideReg: boolean;
  public form: FormGroup;

  constructor(
    private modalService: ModalService
  ) {
    this.hideReg = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(40), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(40)])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log('вошел');
  }

  openRegister(){
  this.modalService.changeValueRegister(this.hideReg);
  }
}
