import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appEngeeTransition]'
})
export class EngeeTransitionDirective implements OnChanges {
  @Input() appEngeeTransition: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges() {
    console.log('>>>', this.appEngeeTransition);
    if (this.appEngeeTransition !== '') {
      this.renderer.removeClass(
        this.el.nativeElement,
        'transitionWrapper--foo'
      );
      this.renderer.removeClass(
        this.el.nativeElement,
        `transitionWrapper--${this.appEngeeTransition}`
      );
      console.log('HERE');
      setTimeout(() => {
        console.log('HERE2');
        this.renderer.addClass(
          this.el.nativeElement,
          `transitionWrapper--${this.appEngeeTransition}`
        );
      }, 200);
    }
  }
}
