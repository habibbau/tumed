import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TumedSharedModule } from 'app/shared/shared.module';
import { TumedCoreModule } from 'app/core/core.module';
import { TumedAppRoutingModule } from './app-routing.module';
import { TumedHomeModule } from './home/home.module';
import { TumedEntityModule } from './entities/entity.module';
import { RouterModule } from '@angular/router';

// jhipster-needle-angular-add-module-import JHipster will add new module here
// import { MainComponent } from './layouts/main/main.component';
// import { NavbarComponent } from './layouts/navbar/navbar.component';
// import { FooterComponent } from './layouts/footer/footer.component';
// import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
// import { ErrorComponent } from './layouts/error/error.component';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';

import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ErrorHandlerInterceptor } from 'app/blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from 'app/blocks/interceptor/notification.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthExpiredInterceptor } from 'app/blocks/interceptor/auth-expired.interceptor';
import { AuthInterceptor } from 'app/blocks/interceptor/auth.interceptor';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { NgxWebstorageModule } from 'ngx-webstorage';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
    NgJhipsterModule.forRoot({
      // set below to true to make alerts look like toast
      alertAsToast: false,
      alertTimeout: 5000,
    }),
    TumedCoreModule,
    TumedHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TumedEntityModule,
    TumedAppRoutingModule,
    TumedSharedModule.forRoot(),
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [MainComponent],
})
export class TumedAppModule {
  // constructor(private dpConfig: NgbDatepickerConfig) {
  //   this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  // }
}
