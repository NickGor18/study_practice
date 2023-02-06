import { Component } from '@angular/core';

@Component({
  selector: 'app-closable',
  templateUrl: './closable.component.html',
  styleUrls: ['./closable.component.css']
})
export class ClosableComponent {
  visible: boolean = true
}
