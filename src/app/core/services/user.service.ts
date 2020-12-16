import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject, Unsubscribable} from 'rxjs';
import {ApiService} from './api.service';
import {JwtService} from './jwt.service';
import {User} from '../models';
import {map, distinctUntilChanged} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class UserService {
  public currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public currentRiderSubject = new BehaviorSubject<any>({});
  public currentRider = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  SubGetUser: Unsubscribable;


  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router,
  ) {

  }


  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate(): boolean {

    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.token) {
      this.apiService.get('/users/me').subscribe(
        data => {
          this.setAuth(data.data.user, this.jwtService.token).then(() => {
            if (data.data.user.rider === null) {
              this.router.navigate(['personal-data'], {replaceUrl: true});
            } else {
              this.apiService.get(`/riders/${data.data.user.rider}`).subscribe(res => {
                this.currentRiderSubject.next(res.data.rider);
                this.router.navigate(['rider-warframes'], {replaceUrl: true});
              });
            }
          });
          return true;
        },
        err => {
          this.purgeAuth();
          return false;
        }
      );
    } else {
      this.router.navigate(['login'], {replaceUrl: true});
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
      return false;
    }
  }

  setAuth(user: User, token?: string, bodyUser?): Promise<any> {
    return new Promise((resolve, reject) => {

      if (token) {

        this.jwtService.setToken(token);
        resolve();
        /*
        this.authFbService.loginWithEmail(user.email).then(() => {

        });
        */
      } else {
        // this.authFbService.login(bodyUser.email, bodyUser.password).then(value => {
        //   // Save JWT sent from server in localstorage
        //   this.jwtService.setToken(user.jwt);
        //   resolve();
        // })
        //   .catch(err => {
        //     console.log('Something went wrong:', err.message);
        //   });
      }
      // Set current user data into observable
      this.currentUserSubject.next(user);
      // Set isAuthenticated to true
    });
  }

  purgeAuth() {

    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({});
    // Set auth status to false
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
        data => {
          this.setAuth(data.user);
          return data;
        }
      ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  isAuth(): boolean {
    return !!this.jwtService.token;
  }

  logout() {
    if (this.isAuth()) {
      this.apiService.post('/api/auth/logout', '').subscribe(res => {
        if (res) {
          this.purgeAuth(); // стирание куки и стримов
          this.router.navigate(['/']); // редирект на главную
        }
      });
    }
    this.purgeAuth(); // стирание куки и стримов
    this.router.navigate(['/']); // редирект на главную
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
      .put('/user', {user})
      .pipe(map(data => {
        // Update the currentUser observable
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }
}
