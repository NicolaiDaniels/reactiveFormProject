import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors'

async function bootstrap() {
	const formData = require('./controllers/formData.controller');
	const app = await NestFactory.create(ApplicationModule);

	app.use(express.static(path.join(__dirname, 'src', 'dist')));
  app.set('views', __dirname + '../../src/dist/');
	app.use(bodyParser.json());
	app.use(cors());

	await app.listen(3000);
}
bootstrap();
