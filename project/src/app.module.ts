import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FormDataController } from './controllers/formData.controller';

@Module({
  imports: [],
  controllers: [AppController, FormDataController],
  components: [],
})
export class ApplicationModule {}
