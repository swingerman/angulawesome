import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[awmBackgroundProgress]',
})
export class BackgroundProgressDirective implements OnInit {
  @Input() backgroundColor = 'rgba(230,230,230,1)';

  @Input() foregroundColor = 'rgb(216,216,216,1)';

  @Input() fillPercentGap = 6;

  private _fillPercent = 0;

  constructor(private el: ElementRef) {}

  get fillPercentPlus(): number {
    return this._fillPercent + this.fillPercentGap;
  }

  @Input()
  set fillPercent(value: number) {
    this._fillPercent =
      value < this.fillPercentGap ? value - this.fillPercentGap : value;
    this.applyStyle();
  }

  ngOnInit(): void {
    this.applyStyle();
  }

  private applyStyle() {
    this.el.nativeElement.style.background = `linear-gradient(90deg,
      ${this.foregroundColor} 0%,
      ${this.foregroundColor} ${this._fillPercent}%,
      ${this.backgroundColor} ${this.fillPercentPlus}%,
      ${this.backgroundColor} 100%)`;
  }
}
