import { Get, Post, Body, Controller } from '@nestjs/common';

@Controller('formData')
export class FormDataController {

  public history: any = [];

  @Post('formdata')
  async postFormData(@Body() obj: any): Promise<any> {
    this.history.push(obj);
    let newObj = Object.assign({}, obj);
    let end = this.history.length - 1;
    newObj["history"] = this.history.slice(0, end);
    return newObj;
  }

}
