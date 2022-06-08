import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BackgroundProgressDirective } from './background-progress.directive';

@Component({
  template: `
    <form awmBackgroundProgress></form>
    <form awmBackgroundProgress [fillPercentGap]="10"></form>
    <form
      awmBackgroundProgress
      backgroundColor="yellow"
      foregroundColor="red"
    ></form>
    <form awmBackgroundProgress [fillPercent]="30"></form>
  `,
})
class TestComponent {}

describe('BackgroundProgressDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[] = [];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BackgroundProgressDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(
      By.directive(BackgroundProgressDirective)
    );
  });

  it('should create an instance', () => {
    expect(des.length).toBe(4);
  });

  it('should apply default styles', () => {
    const background = des[0].nativeElement.style.background;
    expect(background).toBe(
      'linear-gradient(90deg, rgb(216, 216, 216) 0%, rgb(216, 216, 216) 0%, rgb(230, 230, 230) 6%, rgb(230, 230, 230) 100%)'
    );
  });

  it('should apply gap', () => {
    const background = des[1].nativeElement.style.background;
    expect(background).toBe(
      'linear-gradient(90deg, rgb(216, 216, 216) 0%, rgb(216, 216, 216) 0%, rgb(230, 230, 230) 10%, rgb(230, 230, 230) 100%)'
    );
  });

  it('should apply color', () => {
    const background = des[2].nativeElement.style.background;
    expect(background).toBe(
      'linear-gradient(90deg, red 0%, red 0%, yellow 6%, yellow 100%)'
    );
  });

  it('should apply percent', () => {
    const background = des[3].nativeElement.style.background;
    expect(background).toBe(
      'linear-gradient(90deg, rgb(216, 216, 216) 0%, rgb(216, 216, 216) 30%, rgb(230, 230, 230) 36%, rgb(230, 230, 230) 100%)'
    );
  });
});
