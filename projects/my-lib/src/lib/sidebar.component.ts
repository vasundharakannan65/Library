import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  template: `
  <mat-drawer-container class="sidenav-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
          <p>Auto-resizing sidenav</p>
          <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
          <button (click)="showFiller = !showFiller" mat-raised-button>
              Toggle extra text
          </button>
      </mat-drawer>
      <div class="sidenav-content">
          <button type="button" mat-button (click)="drawer.toggle()">
              Toggle sidenav
          </button>
      </div>
  </mat-drawer-container>
  `,
  styles: [`  
  .sidenav-container {
    height: 100%;
  }
  
  .sidenav-content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  
  .sidenav {
    padding: 20px;
  }`
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  showFiller = false;

  ngOnInit(): void {
  }

}
