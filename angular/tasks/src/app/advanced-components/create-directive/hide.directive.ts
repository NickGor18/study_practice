import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit{

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    this.ref.nativeElement.addEventListener('mouseover', () => {
      this.ref.nativeElement.style.visibility = 'hidden';
    })
  }

}
