import { NgModule } from '@angular/core';
import { TumedSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { TumedSharedCommonModule } from 'app/shared/shared-common.module';

@NgModule({
  imports: [TumedSharedCommonModule],
  declarations: [FindLanguageFromKeyPipe, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [TumedSharedLibsModule, FindLanguageFromKeyPipe, LoginModalComponent, HasAnyAuthorityDirective],
})
export class TumedSharedModule {
  static forRoot() {
    return {
      ngModule: TumedSharedModule,
    };
  }
}
