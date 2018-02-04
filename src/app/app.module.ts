import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

import {FormDataService} from './services/formData.service';
import {FormGroupsFunctionsService} from './services/formGroupsFunctions.service';



@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    LazyImageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpModule
  ],
  providers: [FormDataService, FormGroupsFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
