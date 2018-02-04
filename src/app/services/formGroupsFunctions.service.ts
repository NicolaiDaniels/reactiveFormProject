import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';

@Injectable()
export class FormGroupsFunctionsService {

  initGenderModel() {
    const model = {
      question_id: '0',
      gender: ['', Validators.required],
    };
    return model;
  }

  initNameModel() {
    const model = {
      question_id: '1',
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    };

    return model;
  }

  initEmailModel() {
    const model = {
      question_id: '2',
      email: [''],
    };

    return model;
  }

  initAdressModel() {
    const model = {
      question_id: '3',
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      state: ['', Validators.required],
    };

    return model;
  }

  initInsuranceTypeModel() {
    const model = {
      question_id: '4',
      yes: ['', Validators.required],
      no: ['', Validators.required],
    };

    return model;
  }

  initAgeModel() {
    const model = {
      question_id: '5',
      age: ['', Validators.required],
    };

    return model;
  }
}
