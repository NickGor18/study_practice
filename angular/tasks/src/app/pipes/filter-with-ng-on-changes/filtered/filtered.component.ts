import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnChanges {
  @Input() quantity!: number
  squaredQuantity!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['quantity'] && changes['quantity'].currentValue !== changes['quantity'].previousValue) {
      this.squaredQuantity = this.quantity * this.quantity
    }
  }
}
