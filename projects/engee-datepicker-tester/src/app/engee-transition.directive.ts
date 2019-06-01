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
  @Input('appEngeeTransition') payload: {
    action: string;
    activeIndices: any[];
  };

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

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    const { currentValue, previousValue } = changes.payload;

    console.log('currentValue', currentValue);
    console.log('previousValue', previousValue);

    if (
      currentValue.action !== '' &&
      currentValue.activeIndices.join('') !==
        previousValue.activeIndices.join('')
    ) {
      console.log('do stuff');
      this.removeClasses('transitionWrapper--next transitionWrapper--prev');
      this.addClasses('transitionWrapper--foo');
      setTimeout(() => {
        // this.renderer.removeClass(
        //   this.el.nativeElement,
        //   'transitionWrapper--foo'
        // );
        this.removeClasses('transitionWrapper--foo');
        this.addClasses(`transitionWrapper--${currentValue.action}`);
      }, 200);
    }
  }
}
