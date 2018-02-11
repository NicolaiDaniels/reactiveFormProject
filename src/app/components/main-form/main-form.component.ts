import {Component, ElementRef, ViewChild, ViewChildren, QueryList, Renderer2, Inject, HostListener, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {path} from '../../models/path-model';
import {MatRadioModule} from '@angular/material/radio';
import {DOCUMENT} from '@angular/platform-browser';
import {WINDOW} from '../../services/scroll.service';
import {FormDataService} from '../../services/formData.service';
import {FormGroupsFunctionsService} from '../../services/formGroupsFunctions.service';
import {LazyImageComponent} from '../lazy-image/lazy-image.component';

@Component({
    selector: 'main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements AfterViewInit{
  @ViewChild('noShow') d1: ElementRef;
  @ViewChildren('lazyImages') components:QueryList<LazyImageComponent>;

  public templateChoice: string = 'genderForm';
  public currentStep: number = 0;

  genderForm: FormGroup;
  imageUrl:string = '/assets/images/greatPic.jpg';

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private formDataService: FormDataService,
    private fgService: FormGroupsFunctionsService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
    ) {
    this.createForm();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    /*this.window.requestAnimationFrame(() => {
      let wT = this.window.pageYOffset;
      let wB = wT + this.window.innerHeight;
      let cRect: any;
      let pT: any;
      let pB: any;
      let p: number = 0;

      while(p < this.components._results.length) {
        console.log(this.components._results[p].nativeElement);*/
        /*cRect = this.components._results[p].nativeElement.getBoundingClientRect();
        pT = wT + cRect.top;
        pB = pT + cRect.height;

        if (wT < pB && wB > pT) {
          console.log(this.components._results[p]);*/
      /*p++;
        }
      });*/
    /*console.log(e);
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(number);*/
  }

  ngAfterViewInit() {
        this.components._results.forEach((child) => {
          console.log(child.nativeElement);
        });
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
    this.formDataService.postFormData(as.value)
      .subscribe(data => {
        console.log(data);
      });
    this.templateChoice = 'nameForm';
  }
}
