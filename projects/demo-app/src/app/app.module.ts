import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_LOADER } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageCropperModule } from '../../../ngx-img-cropper/src/lib/image-cropper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    {provide: HAMMER_LOADER, useValue: () => import('hammerjs')}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
