import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CpmvSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CpmvSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CpmvSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CpmvSharedModule {
  static forRoot() {
    return {
      ngModule: CpmvSharedModule
    };
  }
}
