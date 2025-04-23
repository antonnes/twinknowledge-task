import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(@Query() query: any) {
    console.log(query);
    const item = this.appService.getData(query.round, query.value);
    console.log(item);
    if(item) {
      return {
        value: item.value,
        category: item.category,
        round: item.round,
        question: item.question
      };
    } else {
      return {
        error: 'No suitable question found!'
      };
    }
  }  
}
