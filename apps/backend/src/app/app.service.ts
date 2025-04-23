import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import path from 'path';
import { IQuestion } from './intrfaces';

@Injectable()
export class AppService {
  private questions: IQuestion[] = [];
  constructor() {
    this.questions = readFileSync(path.join(__dirname, '../data/jeopardy.csv'), 'utf8').split('\r\n').slice(1, 1000).map(row => {
      const rowArray = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      return {
        show_number: rowArray[0],
        air_date: rowArray[1],
        round: rowArray[2],
        category: rowArray[3],
        value: rowArray[4],
        question: rowArray[5],
        answer: rowArray[6]
      }
    });
  }
  getData(round: string, value: string): IQuestion | undefined {
    const filteredQuestions = this.questions.sort(() => Math.random() - 0.5).find((question: IQuestion) => {

      if(round && value) {
        console.log(round , value);
        return question.round.includes(round) && question.value.includes(value);
      }
      if(round) {
        console.log(123);
        return question.round.includes(round);
      }
      if(value) {
        console.log(312);
        return question.value.includes(value);
      }
      return undefined;
    });
    return filteredQuestions;
  }
}
