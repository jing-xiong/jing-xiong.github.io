import { HeaderComponent } from './header/header.component';
import { Component, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(HeaderComponent, {read: ElementRef}) headerComponent: ElementRef;

  constructor(private renderer: Renderer2) {
  }
  ngAfterViewInit() {
    this.renderer.listen(window, "scroll", () => {
      console.log(document.scrollingElement.scrollTop);
      this.renderer.setStyle(this.headerComponent.nativeElement, 'height', 'calc(6vh - ' + document.scrollingElement.scrollTop + 'px)');
    });
  }
}
