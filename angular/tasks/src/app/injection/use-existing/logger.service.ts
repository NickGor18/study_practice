import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(msg: string) {
    console.log(msg)
  }

  logError(msg: string) {
    console.error(msg);
  }

  logUser(user: {name: string}, msg: string) {
    console.log('the ' + user.name + ' user has had the following event: ' + msg)
  }

  logUserError(user: {name: string}, msg: string) {
    console.error('Error for ' + user.name + ': ' + msg)
  }
}
