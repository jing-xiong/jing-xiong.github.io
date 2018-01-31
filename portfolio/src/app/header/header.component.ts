import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen(window, "scroll", () => {
      console.log(document.scrollingElement.scrollTop);
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', 'calc(6vh - ' + document.scrollingElement.scrollTop + 'px)');
    });
  }

}
