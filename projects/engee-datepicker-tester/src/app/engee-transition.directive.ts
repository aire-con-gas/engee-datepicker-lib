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

  addClasses(classNames) {
    const classNamesArr = classNames.split(' ');
    classNamesArr.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
    return this;
  }

  removeClasses(classNames) {
    const classNamesArr = classNames.split(' ');
    classNamesArr.forEach(className => {
      this.renderer.removeClass(this.el.nativeElement, className);
    });
    return this;
  }

  ngOnChanges() {
    console.log('>>>', this.appEngeeTransition);
    this.removeClasses('transitionWrapper--next transitionWrapper--prev');
    if (this.appEngeeTransition !== '') {
      this.addClasses('transitionWrapper--foo');
      setTimeout(() => {
        this.removeClasses('transitionWrapper--foo');
        this.addClasses(`transitionWrapper--${this.appEngeeTransition}`);
      }, 200);
    }
  }
}
