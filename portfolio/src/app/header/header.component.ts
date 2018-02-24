import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  firstNameElement;
  lastNameElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.firstNameElement = this.elementRef.nativeElement.querySelector('[first-name-fade]');
    this.lastNameElement = this.elementRef.nativeElement.querySelector('[last-name-fade]');
    this.renderer.listen(window, "scroll", () => {
      this.renderer.setStyle(this.firstNameElement, 'opacity', 1-(document.scrollingElement.scrollTop/100));
      this.renderer.setStyle(this.firstNameElement, 'letter-spacing', -(document.scrollingElement.scrollTop/8) + 'px');
      this.renderer.setStyle(this.lastNameElement, 'opacity', 1-(document.scrollingElement.scrollTop/100));
      this.renderer.setStyle(this.lastNameElement, 'letter-spacing', -(document.scrollingElement.scrollTop/8) + 'px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', 'calc(8vh - ' + document.scrollingElement.scrollTop + 'px)');
      if (document.scrollingElement.scrollTop > 0) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'black 0px 1px 8px -3px');
      } else {
        this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', 'none');
      }
    });
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'height 300ms');
  }

}
