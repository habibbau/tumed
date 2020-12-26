import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TumedSharedModule } from 'app/shared/shared.module';
import { TumedCoreModule } from 'app/core/core.module';
import { TumedAppRoutingModule } from './app-routing.module';
import { TumedHomeModule } from './home/home.module';
import { TumedEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TumedSharedModule,
    TumedCoreModule,
    TumedHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TumedEntityModule,
    TumedAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class TumedAppModule {}
