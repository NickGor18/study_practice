import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-lower-case',
  templateUrl: './pipe-lower-case.component.html',
  styleUrls: ['./pipe-lower-case.component.css']
})
export class PipeLowerCaseComponent {
  myText = "HELLO THERE. MAKE ME RENDER IN LOWER CASE";
}
