import { Component } from '@angular/core';
import {SimpleLoggerService} from "./simple-logger.service";

@Component({
  selector: 'app-use-existing',
  templateUrl: './use-existing.component.html',
  styleUrls: ['./use-existing.component.css']
})
export class UseExistingComponent {
  constructor(private logger: SimpleLoggerService) {
    console.log(logger)

  }

  logMessage() {
    this.logger.logMessage('this message should appear in the console');
  }
}
