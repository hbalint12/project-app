import { Directive, HostBinding, Input, HostListener } from '@angular/core'

@Directive({
    selector: '[appCustom]'
})
export class CustomDirective {
    @HostBinding('class.is-custom') isCustom = true;
    @HostBinding('class.is-custom-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter() {
        this.hovering=true;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.hovering = false;
    }
    @Input() set appCustom(value) {
        this.isCustom = value
    }
}