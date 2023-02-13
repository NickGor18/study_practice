import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleLoggerService {

  constructor() { }
  logMessage(msg: string) {
    // not implemented
  }

  logError(msg: string) {
    // not implemented
  }
}
