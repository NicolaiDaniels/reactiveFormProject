import { Get, Controller, Res } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(@Res() res) {
    return res.render('index.html');
  }
}
