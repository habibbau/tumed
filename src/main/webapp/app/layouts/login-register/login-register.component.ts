import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/core/login/login.service';
import { StateStorageService } from 'app/core/auth/state-storage.service';

import { Router } from '@angular/router';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class JhiLoginRegisterComponent implements OnInit {
  password: string | any;
  username: string | any;
  rememberMe: boolean | any;
  authenticationError: boolean | any;
  isShowLoginPage = true;
  isShowResetPage = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private stateStorageService: StateStorageService,
    private eventManager: JhiEventManager
  ) {}

  ngOnInit() {}

  // Giriş butonu tarafından çalıstırılan Login fonksiyon
  login() {
    this.loginService
      .login({
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe,
      })
      .subscribe(() => {
        this.authenticationError = false;
        if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
          this.router.navigate(['']);
        }

        this.eventManager.broadcast({
          name: 'authenticationSuccess',
          content: 'Sending Authentication Success',
        });

        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl('');
          this.router.navigateByUrl(redirect);
        }
      })
      .add(() => {
        this.authenticationError = true;
      });
  }

  // Login ve Reset sayfalarını gizlemek ve gostermek(hide&&show) icin kullanılır
  showCurrentPage() {
    this.isShowResetPage = true;
    this.isShowLoginPage = false;
  }
}
