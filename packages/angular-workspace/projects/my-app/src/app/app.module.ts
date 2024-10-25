import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFormLibraryModule,  } from 'angular-form-library';
// import { MyComponent } from 'angular-form-library';


@NgModule({
  declarations: [
    AppComponent,
    // MyComponent
  ],
  imports: [
    BrowserModule,
    AngularFormLibraryModule
  ],
  exports: [
    // MyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }