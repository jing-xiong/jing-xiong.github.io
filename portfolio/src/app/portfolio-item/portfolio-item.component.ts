import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() category = 'Category';
  @Input() title = 'Project title';
  @Input() description = 'This is a brief description of the project and what it means to you. Use this space to draw in the reader to click and learn more.';
  @Input() imgUrl: string;
  @Input() backgroundColor: string = 'gray';


  constructor() { }

  ngOnInit() {
  }

}
