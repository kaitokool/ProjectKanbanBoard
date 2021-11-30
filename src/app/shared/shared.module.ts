import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { ResizerComponent } from './components/resizer/resizer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    ResizerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule 
  ],
  bootstrap: [SidebarComponent]
})
export class SharedModule { }
