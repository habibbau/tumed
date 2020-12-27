import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [
    NgbModule,
    InfiniteScrollModule,
    // CookieModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    NgJhipsterModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    TranslateModule,
  ],
})
export class TumedSharedLibsModule {
  static forRoot() {
    return {
      ngModule: TumedSharedLibsModule,
    };
  }
}
