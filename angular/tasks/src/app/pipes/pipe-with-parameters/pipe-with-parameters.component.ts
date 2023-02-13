import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-with-parameters',
  templateUrl: './pipe-with-parameters.component.html',
  styleUrls: ['./pipe-with-parameters.component.css']
})
export class PipeWithParametersComponent {
  theDate = new Date(2035, 3, 1, 14, 15);
}
