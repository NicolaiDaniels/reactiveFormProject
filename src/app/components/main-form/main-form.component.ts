import {Component, ElementRef, ViewChild, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {path} from '../../models/path-model';
import {MatRadioModule} from '@angular/material/radio';

import {FormDataService} from '../../services/formData.service';
import {FormGroupsFunctionsService} from '../../services/formGroupsFunctions.service';

@Component({
    selector: 'main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {
  @ViewChild('noShow') d1: ElementRef;

  public templateChoice: string = 'genderForm';
  public currentStep: number = 0;

  genderForm: FormGroup;
  imageUrl:string = 'https://images.unsplash.com/photo-1494023120489-e26d4967e173?ixlib=rb-0.3.5&s=ea74cec3b8ad95fe1c1bd0a45a413b00&auto=format&fit=crop&w=1350&q=80';//https://i.imgur.com/qfrBPgu.jpg

  constructor(private fb: FormBuilder, private renderer: Renderer2, private formDataService: FormDataService, private fgService: FormGroupsFunctionsService) {
    this.createForm();
  }

  submitForm(sth: any) {
    this.currentStep += 1;
    //this.templateChoice = 'nameForm';
    /*this.renderer.addClass(this.d1.nativeElement, 'noShow');
    this.renderer.listen('document', 'animationend', (event) => {
      console.log('animation ended');
      this.renderer.removeClass(this.d1.nativeElement, 'noShow');
      this.templateChoice = sth;
    });*/
  }

  //create the Form
  createForm() {
    this.genderForm = this.fb.group({
      gender: this.fb.group(this.fgService.initGenderModel()),
      name: this.fb.group(this.fgService.initNameModel()),
      email: this.fb.group(this.fgService.initEmailModel()),
      adress: this.fb.group(this.fgService.initAdressModel()),
      insuranceType: this.fb.group(this.fgService.initInsuranceTypeModel()),
      age: this.fb.group(this.fgService.initAgeModel()),
    });
  }

  //getters
  get gender(): any {
    return this.genderForm.get('gender');
  }

  get name(): any {
    return this.genderForm.get('name');
  }

  get email(): any {
    return this.genderForm.get('email');
  }

  get adress(): any {
    return this.genderForm.get('adress');
  }

  get insuranceType(): any {
    return this.genderForm.get('insuranceType');
  }

  get age(): any {
    return this.genderForm.get('age');
  }

  submitButt(as:any) {
    console.log(as.value);
    this.formDataService.postFormData(as.value)
      .subscribe(data => {
        console.log(data);
      });
    this.templateChoice = 'nameForm';
  }


}
