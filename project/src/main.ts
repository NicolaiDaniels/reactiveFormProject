import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors'

async function bootstrap() {
	const formData = require('./controllers/formData.controller');
	const app = await NestFactory.create(ApplicationModule);

	app.use(express.static(__dirname + '/view'));

	//View Engine
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.engine('html', require('ejs').renderFile);

	app.use(express.static(path.join(__dirname, 'dist')));
	app.use(bodyParser.json());
	app.use(cors());

	await app.listen(3000);
}
bootstrap();
