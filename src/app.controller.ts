import { Controller, Get, Res, Render, } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}

