import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { FooterComponent } from './footer.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    MyLibComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
