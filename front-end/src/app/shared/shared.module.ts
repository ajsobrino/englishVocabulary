import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { ComponentsRoutingModule } from '../components/components-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,  ComponentsRoutingModule,ComponentsModule
  ],
  exports:[NavbarComponent, FooterComponent,HomeComponent]
})
export class SharedModule { }
