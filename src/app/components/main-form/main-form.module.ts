import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormDataService} from '../../services/formData.service';
import {FormGroupsFunctionsService} from '../../services/formGroupsFunctions.service';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import {LazyImageModule} from '../lazy-image/lazy-image.module';
import {MainFormComponent} from './main-form.component';

@NgModule({
  declarations: [
    MainFormComponent
  ],
  imports: [
    MatRadioModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LazyImageModule
  ],
  providers: [
    FormDataService,
    FormGroupsFunctionsService
  ],
  bootstrap: [],
  exports: [MainFormComponent]
})

export class MainFormModule { }
