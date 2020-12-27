import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TumedSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';
import { TumedSharedCommonModule } from '../../shared';

@NgModule({
  imports: [TumedSharedModule, RouterModule.forChild([auditsRoute]), TumedSharedCommonModule],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
