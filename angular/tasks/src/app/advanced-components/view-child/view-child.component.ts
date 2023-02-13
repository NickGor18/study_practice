import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  @ViewChild('the_best') containerEl!: ElementRef;
  greatest: string = '';

  constructor() {
  }

  reveal() {
    this.greatest = this.containerEl.nativeElement['innerText']
  }
}
