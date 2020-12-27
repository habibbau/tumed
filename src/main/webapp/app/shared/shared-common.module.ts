import { NgModule } from '@angular/core';

import { TumedSharedLibsModule, JhiAlertComponent } from './';
import { JhiNavigationComponent } from '../layouts/header-navigation/navigation.component';
import { JhiSidebarComponent } from '../layouts/sidebar/sidebar.component';
import { PasswordResetInitComponent } from '../account/password-reset/init/password-reset-init.component';
import { JhiBreadcrumbComponent } from '../layouts/breadcrumb/breadcrumb.component';
import { JhiLoginRegisterComponent } from '../layouts/login-register/login-register.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';
import { JhiSpinnerComponent } from './spinner/jhi-spinner.component';

@NgModule({
  imports: [TumedSharedLibsModule],
  declarations: [
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiSpinnerComponent,
    JhiNavigationComponent,
    JhiSidebarComponent,
    JhiBreadcrumbComponent,
    JhiLoginRegisterComponent,
    PasswordResetInitComponent,
  ],
  exports: [
    TumedSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiSpinnerComponent,
    JhiNavigationComponent,
    JhiSidebarComponent,
    JhiBreadcrumbComponent,
    JhiLoginRegisterComponent,
    PasswordResetInitComponent,
  ],
})
export class TumedSharedCommonModule {}
