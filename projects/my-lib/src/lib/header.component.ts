import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  template: `
<mat-toolbar>
    <button mat-raised-button>
        <mat-icon>menu</mat-icon>
    </button>
    <span>Header</span>
    <span class="header-spacer"></span>
    <button mat-raised-button>
        <mat-icon>favorite</mat-icon>
    </button>
    <button mat-raised-button>
        <mat-icon>share</mat-icon>
    </button>
</mat-toolbar>
  `,
  styles: [`  
  .header-spacer {
      flex: 1 1 auto;
  } `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
