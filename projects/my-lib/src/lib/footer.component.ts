import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-footer',
  template: `
<mat-toolbar class="footer">
    <span>Footer</span>
</mat-toolbar>
  `,
  styles: [`
  .footer {
    bottom:0px; 
    align-items:center;
  }`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
