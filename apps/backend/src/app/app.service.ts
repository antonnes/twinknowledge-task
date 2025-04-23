import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import path from 'path';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const csvArray = readFileSync(path.join(__dirname, '../data/jeopardy.csv'), 'utf8').split('\r\n').slice(1).map(row => row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    console.log(123);
    //console.log(data);
    return { message: 'Hello API' };
  }
}
